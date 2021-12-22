import React, { useState } from "react";
import FormMeal from "../FormMeal/FormMeal.jsx";
import RecipeDetails from "../RecipeDetails/RecipeDetails.jsx";
import "./recipes.scss";

const Recipes = ({ recipe }) => {
  const [toggleIngredients, setToggleIngredients] = useState(false);
  const [toggleReview, setToggleReview] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a
        className='button'
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        URL
      </a>
      <button className='button' onClick={() => setToggleIngredients(!toggleIngredients)}>
        Ingredients
      </button>
      {console.log("The recipe " + recipe)}
      {toggleIngredients && <RecipeDetails ingredients={ingredients} />}

      <button className='button' onClick={() => setToggleReview(!toggleReview)}>Review</button>
      {console.log("The recipe " + recipe)}
      {toggleReview && <FormMeal recipe={url} />}
    </div>
  );
};

export default Recipes;
