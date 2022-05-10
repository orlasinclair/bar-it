import React from 'react';
import { useNavigate as Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function NavBar() {
    const goTo = Navigate();

    function goBack() {
        goTo(-1);
    }

    return (<>
        <NavLink role="home-button" to="" className='link'><h1>Home</h1></NavLink>
        <NavLink role="settings-button" to="settings"  className='link'><h1>settings</h1></NavLink>
        <NavLink role="previoussearch-button" to="previous"  className='link'><h1>previous</h1></NavLink>
        <NavLink role="about-button" to="about" activeclassname="selected" className='link'><h1>about</h1></NavLink>
        <NavLink role="login-button" to="login"  className='link'><h1>login</h1></NavLink>
        <NavLink role="signup-button" to="signup"  className='link'><h1>signup</h1></NavLink>
        <button role="back-button" className='BackBtn' onClick={goBack}>Back</button>
    </>)

}

export default NavBar;