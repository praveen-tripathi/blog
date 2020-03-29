import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Comments from "./Comments";

const PostDetails = props => {
  let history = useHistory();
  let location = useLocation();
  const { post, userName } = location.state;

  return (
    <div className="article">
      <button className="btn" onClick={history.goBack}>
        Go Back
      </button>
      <article key={post.id}>
        <h1>{post.title}</h1>
        <span>Post Author: {userName}</span>
      </article>
      <Comments postId={post.id} />
    </div>
  );
};

export default PostDetails;
