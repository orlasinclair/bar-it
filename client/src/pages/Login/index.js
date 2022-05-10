import React from 'react';
import Quagga from 'quagga';
import {Login} from '../../components'
//import './styles.css'


function LoginPage (){
    Quagga.stop()
    return(<>
    <h1 role="heading">Log-in page</h1>
    <Login />
    </>)

}


export default LoginPage;