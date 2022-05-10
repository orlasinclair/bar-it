import React from 'react';
import { getUserSettings } from '../../actions';
//import './styles.css'
//import {BackButton} from '../../components'


function Settings (){

    getUserSettings()
    return(<h1 role="heading">settings page</h1>)

}


export default Settings;
