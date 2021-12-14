import React, { useState } from "react";
import './Navbar.scss'





const Navbar = (props) => {
    const [currentUser, setCurrentUser] = useState();

    const logOut = ()=>{
        localStorage.removeItem("token", "refresh");
        setCurrentUser({})
        console.log('The user is not signed in')
        

      }

    
    return ( 
        <div>
            <div className='Navbar'>
            <a className='button' href='/home'>Home</a>
            <a className='button' >Profile</a>
            <a className='button' onClick={logOut} >Logout</a>
        </div>
        </div>
     );
}
 
export default Navbar;