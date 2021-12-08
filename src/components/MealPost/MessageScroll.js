import React from 'react';
import Message from './Message/Message';
import SubMessage from './Message/SubMessage/SubMessage';

function MessageScroll(props){
    return ( 
        <>
        <Message user='Anonymous' editable={false} message = 'Looks Great!' likes ={25}/>
        <Message user='Michael' editable={false} message = 'Yummy!!!!!!!' likes ={75}/>
        <div className='bottomBar'>
        <div className = 'loader'/>
        </div>
        </>
     );
}   
 
export default MessageScroll;