import React, { useEffect, useState } from "react";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentFetchError, setcommentFetchError] = useState(false);

  const fetchComment = async postId => {
    await fetch(
      "https://jsonplaceholder.typicode.com/comments/?postId=" + postId
    )
      .then(response => response.json())
      .then(response => setComments(response))
      .catch(err => setcommentFetchError(err));
  };

  useEffect(() => {
    fetchComment(postId);
  }, []);

  return (
    <div className="comment-list">
      {commentFetchError && "Error fetching comments..."}
      {!comments.length
        ? "Loading comments..."
        : comments.map((comment, index) => (
            <div className="comment">
              <div>Subject: {comment.name}</div>
              <p>Comment: {comment.body}</p>
              <div>Email: {comment.email}</div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
