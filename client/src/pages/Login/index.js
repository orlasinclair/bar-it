import React from 'react';
import Quagga from 'quagga';
import {Login} from '../../components'
//import './styles.css'


function LoginPage (){
    Quagga.stop()
    return(<>
    <Login />
    </>)

}


export default LoginPage;
