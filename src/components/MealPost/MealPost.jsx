import React, { Component } from 'react';
import './MealPost.css'
import TopCommentsBox from './CommentsBox/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';

    function MealPost() { 
        return ( 
            <div className='ColHolder'>
                <h1>Meal</h1>
                <b>This is the Meal I had today</b>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hungarian_goulash_soup.jpg/640px-Hungarian_goulash_soup.jpg' alt="Soup" width="200" height="150"></img>
            <TopCommentsBox autoFocus={false}/>
            <MessageScroll />
            </div>
        );
    }
 
export default MealPost;