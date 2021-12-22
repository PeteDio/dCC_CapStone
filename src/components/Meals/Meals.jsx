import React, { useState, useEffect } from "react";
import './meals.scss'
import axios from "axios";
import MealDetails from "../MealDetails/MealDetails";
const Meals = ({ meal }) => {
  const {recipe, datetime, caption } = meal;
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      console.log("All meals response: ", meal);
      const jwt = localStorage.getItem("token");
      let res = await axios.get(`http://127.0.0.1:8000/api/comments/mealid/16/`, { headers: { Authorization: "Bearer " + jwt }});
      console.log("All comments response: ", res.data);
      setComments(res.data);
      // console.log(meals)
    } catch (err) {
      console.log("An API error occured with comments: ", err);
      console.log(comments);
    }
  };

  useEffect(() => {
    getComments();
  }, []);


  

  return (
    <div className="meal">
      <span>{caption}</span>
      <button>{recipe}</button>
      <span>{datetime}</span>
      {comments.map(comment => <MealDetails comment={comment} />)}
      {console.log('comments from the return in meals.jsx ' + comments[0])}
      
      

    </div>
  );
};

export default Meals;
