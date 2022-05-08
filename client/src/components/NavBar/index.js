import React from 'react';
import { useNavigate as Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function NavBar() {
    const goTo = Navigate();

    function goBack() {
        goTo(-1);
    }

    return (<>
        <NavLink to="" activeClassName="selected" className='link'><h1>Home</h1></NavLink>
        <NavLink to="settings" activeClassName="selected" className='link'><h1>settings</h1></NavLink>
        <NavLink to="about" activeClassName="selected" className='link'><h1>about</h1></NavLink>
        <button className='BackBtn' onClick={goBack}>Back</button>
    </>)

}

export default NavBar;