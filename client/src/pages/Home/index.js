import React, {useState} from 'react';
//import './styles.css'
import {BCS} from '../../components'
import {Login} from '../../components'
import {Signup} from '../../components'
import SignupSuccess from '../../components/Signup/SignupSuccess'


function Home (){

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true)
    }
    return(<>
    <h1>Home page</h1>
    { !formIsSubmitted ? <Signup submitForm={submitForm} /> : <SignupSuccess/>}
    <Login/>
    <BCS />

    </>)

}


export default Home;
