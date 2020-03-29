import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, users }) => {
  const findUser = userId => users && users.find(user => user.id === userId);

  return (
    <div className="grid-row">
      {posts.map((post, index) => {
        const postAuthor = findUser(post.userId);
        return (
          <article key={post.id} className="grid-item">
            <Link
              to={{
                pathname: `/post/${post.id}`,
                state: {
                  post: post,
                  userName: postAuthor.username
                }
              }}
            >
              <h1>{post.title}</h1>
              <span>{post.body}</span>
            </Link>
            <div className="user-link">
              Post Author:{" "}
              <Link
                to={{
                  pathname: `/user/${post.userId}`,
                  state: {
                    user: postAuthor
                  }
                }}
              >
                {postAuthor.username}
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PostList;
