import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table'


const Replies = (props) => {
    
    const [replies, setReplies] = useState([])
    
    useEffect(() => {
        getReplies(props.id)
    }, [replies])

    const getReplies = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/replies/5/`)
            console.log(response.data)
            setReplies(response.data)
        } catch (error) {
            console.log("retrieving replies", error)
        }
    }
    
    return(
        
        <div>
        <h6>{replies.text}</h6>
        </div>
    );
}
 
export default Replies;