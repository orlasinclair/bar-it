import React, { useState, useEffect, Fragment } from 'react';
import './style.css'
import BCS from '../BCS'




function Home (){
    const [username, setUsername] = useState('there');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetch('https://barr-it.herokuapp.com/api/v1/barrit/auth/user/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setUsername(data.username);
            setLoading(false);
          });
      }
    , []);
    

    return(<>

    <div>
        {loading === false && (
            <Fragment>
                <h2>Hello {username}!</h2>
                <p>Happy Scanning! 😊</p>
            </Fragment>
            )}
        </div>

    <BCS />
    </>)

}


export default Home;
