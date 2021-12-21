import "./HomePage.scss";
import axios from "axios";
import Meals from "../Meals/Meals";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/meals/all/`).then((response) => {
      setMeal(response.data);
    });
  });

  if (!meal) return( 
  <div className="errorPage">
    <button>Click Here to refresh call</button>
  </div>
  );

  return (
    <div className="homePage">
      <div className="post">
         {meal.map((meal) => (
          <Meals meal={meal} />
        ))} 
      
      </div>
    </div>
  );
};

export default HomePage;
