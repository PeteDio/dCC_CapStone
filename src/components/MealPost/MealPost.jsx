import React, { Component } from 'react';
import './MealPost.css'
import TopCommentsBox from './CommentsBox/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';
import Post from './Post/Post.jsx'

    function MealPost() { 
        return ( 
            <div>
            <Post/>
            <TopCommentsBox autoFocus={false}/>
            <MessageScroll />
            </div>
        );
    }
 
export default MealPost;