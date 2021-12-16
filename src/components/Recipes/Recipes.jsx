import React, {useState} from 'react';
import { Link } from "react-router-dom";
import RecipeDetails from '../RecipeDetails/RecipeDetails.jsx';

const Recipes = ({recipe}) => {
    const [toggle, setToggle] = useState(false)

    const {label, image, url, ingredients} = recipe.recipe;
    return(
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a className="url-btn" href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <button onClick={() => setToggle(!toggle)}>Ingredients</button>
            {toggle && <RecipeDetails ingredients={ingredients}/>}
            <Link to="/home">click here</Link>
        </div>
    );
}

export default Recipes;