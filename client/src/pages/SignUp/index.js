import React, {useState} from 'react';
import Signup from '../../components/Signup'
import SignupSuccess from '../../components/Signup/SignupSuccess'
import Quagga from 'quagga';
//import './styles.css'
//import {BackButton} from '../../components'


function SignUp (){
    Quagga.stop()
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true)
    }
    return(<>
    <h1 role="heading">Sign up page</h1>
    { !formIsSubmitted ? <Signup submitForm={submitForm} /> : <SignupSuccess/>}
    </>)

}


export default SignUp;