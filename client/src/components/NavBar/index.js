import React, {Fragment, useState, useEffect} from 'react';
import { useNavigate as Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
import './styles.css'



function NavBar() {
    const [isAuth, setIsAuth] = useState(false);
    const goTo = Navigate();

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          setIsAuth(true);
        }
      }, []);
    

    function goBack() {
        goTo(-1);
    }
    const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e, name ) => {
    setActiveItem(name)
  }

    return (
        <Menu secondary>
        { isAuth === true ? ( 
            <Fragment >
                <Menu.Item
                as={NavLink} 
                role="home-button" 
                name="home"
                to="/" 
                className='link' 
                active={activeItem === 'home'}
                onClick={handleItemClick}
                 />

                <Menu.Item
                as={NavLink} 
                role="about-button" 
                name="about"
                to="about" 
                className='link' 
                active={activeItem === 'about'}
                onClick={handleItemClick}
                 />

                <Menu.Item
                as={NavLink} 
                role="settings-button" 
                name="settings"
                to="settings" 
                className='link' 
                active={activeItem === 'settings'}
                onClick={handleItemClick}
                 />

                 <Menu.Item
                as={NavLink} 
                role="logout-button" 
                name="logout"
                to="logout" 
                className='link' 
                active={activeItem === 'logout'}
                onClick={handleItemClick}
                 />
                
                <Button icon role="back-button" className='BackBtn' onClick={goBack}><Icon name= 'backward'></Icon></Button>

            </Fragment>
            ): (
                <Fragment>
                    <Menu.Item
                as={NavLink} 
                role="login-button" 
                name="login"
                to="login" 
                className='link' 
                active={activeItem === 'login'}
                onClick={handleItemClick}
                 />

                <Menu.Item
                as={NavLink} 
                role="signup-button" 
                name="signup"
                to="signup" 
                className='link' 
                active={activeItem === 'signup'}
                onClick={handleItemClick}
                 />
                </Fragment>
            )}
        
        
    </Menu>)

}

export default NavBar;
