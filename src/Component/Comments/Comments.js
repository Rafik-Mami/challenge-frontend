import React from "react";
import "./Comments.css";
const Comments = ({ comment }) => {
  return (
    <div className="comments">
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
      
    </div>
  );
};

export default Comments;
