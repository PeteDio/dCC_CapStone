import "./HomePage.scss";
import axios from "axios";
import Meals from "../Meals/Meals";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [meals, setMeal] = useState([]);

  const getMeals = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/meals/all/");
      console.log("All Meals response: ", res.data);
      setMeal(res.data);
      // console.log(meals)
    } catch (err) {
      console.log("An API error occured with meals: ", err);
      console.log(meals);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="homePage">
      <div className="mealpost">
        {meals.map((meal) => (
          <Meals meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
