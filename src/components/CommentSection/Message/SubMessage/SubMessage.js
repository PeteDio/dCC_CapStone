import React, { useRef, useState, useContext } from 'react';
import SubCommentsBox from '../../CommentsBox/SubComments/SubComments';

const showReply = React.createContext();

export function useOpenReply() {
    return useContext(showReply);
}

function SubMessage(props){


    const likeIcon = useRef();  
    const numLikes = useRef();

    const[openReply, setOpenReply] = useState(false);

    //when canel/reply button  press

    const changeOpenReply=() =>{
        setOpenReply(prevState => prevState = !prevState)
    }

    // LIKE message
    let toggleLike = false;
    let likes = props.likes;

    const likeComment = () => {
        toggleLike = !toggleLike;
        if(toggleLike){
            likes++;
            likeIcon.current.style.color = "#4688de";
        }
        else{
            likes--;
            likeIcon.current.style.color = "gray";
        }
        numLikes.current.innerHTML = likes;
    }

    const deleteMessage = () => {}




    return(
        <>
        <section className='messageContainer'>
            <div className='messageUser'>{props.user}</div>
            <i className='fas fa-user-circle'></i>
            <div className='messageText'>{props.message}</div>
            <section className='messageIconsContainer'>
                <i className='fas fa-thumbs-up' ref={likeIcon} onClick={likeComment}></i>
                <div ref = {numLikes}>{props.likes}</div>
                <i className='fas fa-thumbs-down'></i>
                {
                    !props.editable ? (
                        <div onClick={changeOpenReply}
                        style={{cursor:'pointer'}}>REPLY</div>
                    ) : (
                        <div onClick={deleteMessage}
                        style={{cursor: "pointer"}}>DELETE</div>
                    )
                }
            </section>
            <showReply.Provider value="changeOpenReply">
                {openReply && <SubCommentsBox 
                autoFocus={true} />}
            </showReply.Provider>
        </section>
        </>
    )
}

export default SubMessage;