import React, { useState } from "react";
import "./FormMeal.scss";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import jwtDecode from "jwt-decode";

const FormMeal = (recipe) => {
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    console.log("get user jwt call", user);

    let payload = {
      user: user.user_id,
      likes: 0,
      recipe: recipe.recipe,
      date: date,
      caption: caption,
    };

    console.log("Meal PayLoad:", payload);
    let response = await axios.post("http://127.0.0.1:8000/api/meals/user/post/", payload, { headers: { Authorization: "Bearer " + jwt } }
    );

    console.log("New post data sent: ", response.data);
    window.location = "/home";
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Caption</label>
      <input type="text" onChange={(e) => setCaption(e.target.value)}></input>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      <button type="submit">Post A Meal</button>
      <StarIcon className="icon"></StarIcon>
    </form>
  );
};

export default FormMeal;
