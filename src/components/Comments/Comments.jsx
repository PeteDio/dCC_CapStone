import React, { useState } from 'react';

const Comments = (props) => {

    const [comment, setComment] = useState([' '])

    return (
        <div>
            {props.comments}
            <form>
            <table>
                <th>Comments</th>
                <tbody>
                {props.comments}
                    {props.postComments.map(function(comment){
                        return (
                            <tr>
                                <td>{comment.comment}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <input type="text"/>
            <button type="submit">Submit Comment</button>
            </form>
        </div>
    )
}
 
export default Comments;