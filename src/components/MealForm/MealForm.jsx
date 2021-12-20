import React, { useState } from "react";
import "./MealForm.css";
import axios from "axios";


const MealForm = (recipe) => {
  const [caption, setCaption] = useState("");
  const [dateTime, setDateTime] = useState("");
  
  


  const onSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      likes: 0,
      recipe: recipe.recipe,
      datetime: "2021-12-13T21:45:49Z",
      caption: caption,
    };

    console.log("meal Post info:", payload);
    const jwt = localStorage.getItem('token');
    let response = await axios.post("http://127.0.0.1:8000/api/meals/", payload, { headers: {Authorization: 'Bearer ' + jwt}});
    console.log("New post data sent: ", response.data);
    window.location = "/home";
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Caption</label>
      <input type="text" onChange={(e) => setCaption(e.target.value)}></input>
      <button type="submit">Post A Meal</button>
    </form>
  );
};

export default MealForm;
