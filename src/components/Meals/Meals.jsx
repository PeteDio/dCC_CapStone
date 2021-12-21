import React, { useState, useEffect } from "react";
import './meals.scss'
import axios from "axios";
const Meals = ({ meal }) => {

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/meals/all/${id}`).then((response) => {
  //     setComments(response.data);
  //   });
  // });

  const { id, recipe, datetime, caption } = meal;

  return (
    <div className="meal">
      <button>{recipe}</button>
      <span>{caption}</span>
      <span>{datetime}</span>
    </div>
  );
};

export default Meals;
