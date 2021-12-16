import React, { useState } from "react";
import './Navbar.scss'





const Navbar = () => {
    
    return ( 
        <div>
            <div className='Navbar'>
            <a className='button' href='/home'>Home</a>
            <a className='button' href='/profile'>Profile</a>
            <a className='button' href='/logout'>Logout</a>
        </div>
        </div>
     );
}
 
export default Navbar;