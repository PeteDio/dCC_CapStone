import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Replies from "../Replies/Replies";
import Comments from "../Comments/Comments";
import axios from "axios";

const MealDetails = (props) => {
  const [newComment, setComment] = useState(""); 
  const comment = props.comment;



  const onSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      post: 16,

    };

    console.log("New Comment:", payload);
    const jwt = localStorage.getItem("token");
    let response = await axios.post(
      "http://127.0.0.1:8000/api/comments/post",
      payload,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log("New post data sent: ", response.data);
    window.location = "/home";
  };

  return (
    <div className="comments">
      <b className='comment'>{comment.comment}</b>
      <Replies id={props.id}/>
      <form className="form" onSubmit={onSubmit}>
      <label>Caption</label>
      <input type="text" onChange={(e) => setComment(e.target.value)}></input>
      <button type="submit">Reply to Meal</button>
    </form>
    </div>
  );
};
export default MealDetails;


