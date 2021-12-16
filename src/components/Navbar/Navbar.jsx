import React, { useState } from "react";
import useForm from '../useForm';
import './Navbar.scss'





const Navbar = () => {


    const [query, setQuery] = useState("");

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
    }








    return ( 
        <div className="Navbar">
            <div className='left'>
                <a className='button' href='/home'>Home</a>
                <a className='button' href='/profile'>Profile</a>
                <a className='button' href='/logout'>Logout</a>
            </div>
            <div className="right">
                <div class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Type to Search..."/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;