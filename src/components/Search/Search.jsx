import React, {useState} from 'react';
import './search.css';
import { ID, foodAPI } from '../Keys/API';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Recipes from '../Recipes/Recipes';
import Alert from '../Alert/Alert';

const Search = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const getRecipes = async () => {
        if(query !== ""){
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${foodAPI}`);
            if(!response.data.count){
                return setAlert('That food/recipe does not exist')
            }
            setRecipes(response.data.hits)
            console.log(response)
            setAlert("");
            setQuery("");
        } else {
            setAlert('Cant Leave Search Blank')
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getRecipes();
    }

    return(
        <div className="Search">
            <h1>What's To Eat?</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !=="" && <Alert alert={alert} />}
                <input type="text" placeholder="What do you plan on making?"
                autoComplete="off" onChange={onChange} value={query}/>
                <input type="submit" value="search"/>
            </form>
            {console.log(recipes)}
            <div className="recipes">
                {recipes !==[] && 
                recipes.map(recipe => <Recipes key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
    )
}
export default Search;