import React, { Component, useState, useEffect } from "react";
import "./CommentSection.css";
import TopCommentsBox from "./CommentsBox/TopCommentsBox/TopCommentsBox";
import Message from "./Message/Message.js";
import axios from "axios";

const CommentSection = (comment) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(comment.id);

    let response = axios.get(
      `http://127.0.0.1:8000/comments/comments/${comment.id}/`
    );
    console.log(response.data);
    setComments(response.data);
  });

  return (
    <div className="ColHolder">
      <TopCommentsBox autoFocus={false} />
      {comments.map((comment) => (
        <Message user={comments.user} comment={comments.comment} likes={1} />
      ))}
      {console.log("this is also a comment " + comments)}

      <div className="bottomBar">
        <div className="loader" />
      </div>
    </div>
  );
};

export default CommentSection;
