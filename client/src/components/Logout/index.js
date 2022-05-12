import React, { useState, useEffect, Fragment } from 'react';
import "./styles.css"
import "../../App.css"

export default function Logout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (localStorage.getItem('token') == null) {
        window.location.replace('https://barr-it.netlify.app/');
      } else {
        setLoading(false);
      }
    }, []);
  
    const handleLogout = e => {
      e.preventDefault();
  
      fetch('https://barr-it.herokuapp.com/api/v1/barrit/auth/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          localStorage.clear();
          window.location.replace('https://barr-it.netlify.app/');
        });
    };
  
    return (
      <div>
        {loading === false && (
          <Fragment>
            <h1>Are you sure you want to logout?</h1>
            <input type='button' value='Logout' onClick={handleLogout} />
          </Fragment>
        )}
      </div>
    );
  };
