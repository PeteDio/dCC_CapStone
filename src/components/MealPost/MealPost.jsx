import React, { Component } from 'react';
import './MealPost.css'
import TopCommentsBox from './CommentsBox/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';
import Post from './Post/Post.jsx'
import axios from 'axios';


    function MealPost() { 

        const getMeals = async () =>  {
            let allMeals = await axios.get('http://127.0.0.1:8000/api/meals/all/')
            console.log(allMeals)

        }


        return ( 
            <div className='ColHolder'>
            {/* <button onClick={getMeals}> all meals</button>
            
            
            */}
            <Post/>
            <div className="replies">
            <TopCommentsBox autoFocus={false}/>
            <MessageScroll />
            </div>
            </div>
        );
    }
 
export default MealPost;