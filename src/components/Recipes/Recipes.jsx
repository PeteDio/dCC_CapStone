import React, { useState } from "react";
import MealForm from "../MealForm/MealForm.jsx";
import RecipeDetails from "../RecipeDetails/RecipeDetails.jsx";

const Recipes = ({ recipe }) => {
  const [toggleIngredients, setToggleIngredients] = useState(false);
  const [toggleReview, setToggleReview] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a
        className="url-btn"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        URL
      </a>
      <button onClick={() => setToggleIngredients(!toggleIngredients)}>Ingredients</button>
      {console.log("The recipe " + recipe)}
      {toggleIngredients && <RecipeDetails ingredients={ingredients} />}

      <button onClick={() => setToggleReview(!toggleReview)}>Review</button>
      {console.log("The recipe " + recipe)}
      {toggleReview && <MealForm recipe={url} />}
    </div>
  );
};

export default Recipes;
