import React, {useState, useEffect, } from "react";
import './Login.scss';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {Link} from "react-router-dom"

const Login = () => {
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [jwt, setJwt] = useState();

  function getJWT() {
    const jwt = localStorage.getItem('token');
    setJwt(jwt);
  };
  
  function getUser() {
    try{
      const user = jwtDecode(jwt);
      console.log(user)
      setCurrentUser(user)
    } catch {
    }
  };
  
  useEffect(()=> {
    getJWT();
  },[])

  useEffect(()=> {
    console.log(jwt)
    getUser();
  },[jwt])

  const onSubmit = async (e)=>{
    e.preventDefault();
      let user = {
        "username": userName,
        "password": password,
      }
    console.log("User Info: ", user)
    let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user);
    console.log("Token results are: ", response.data)
    // add response to local storage.
    localStorage.setItem("token", response.data.access)
    localStorage.setItem("refresh", response.data.refresh)
    getJWT()
    window.location = '/';
  };


  return (
    <div className="container">
      <div className="Login">
        <form className="form" onSubmit={onSubmit}>
            <label>Username</label>
            <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
            <label>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button className='button'type='submit'>Login</button> <span>or <Link to="registration">click here</Link> to register</span>
        </form>
      </div>
    </div>
  )
};

export default Login;