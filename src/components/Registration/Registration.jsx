import React, {useState} from 'react';
import './Registration.scss';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

const Registration = () => {
    const[userName, setUserName]= useState("");
    const[password, setPassword]= useState("");
    const[email, setEmail] = useState("");
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[middleName, setMiddleName] = useState("");

    const onSubmit = async (e)=>{
        e.preventDefault();
        let payload = {
            "username": userName,
            "password": password,
            "email": email,
            "first_name": firstName,
            "last_name": lastName,
            "middle_name": middleName
        }
        console.log("Registered user info:", payload)
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', payload);
        console.log("New user data sent: ", response.data)
        window.location = '/';
    };


    return (
        <div className="registration">
            <form className="form" onSubmit={onSubmit}>
                <label>Username</label>
                <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
                <label>Password</label>
                <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                <label>Email</label>
                <input type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                <label>First Name</label>
                <input type='text' onChange={(e)=>setFirstName(e.target.value)}></input>
                <label>Last Name</label>
                <input type='text' onChange={(e)=>setLastName(e.target.value)}></input>
                <label>Middle Name</label>
                <input type='text' onChange={(e)=>setMiddleName(e.target.value)}></input>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
};

export default Registration;