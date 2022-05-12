import React, {useState, useEffect} from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import Quagga from 'quagga';
import './style.css'
//import {BackButton} from '../../components'


function About (){
    Quagga.stop()
    const [about, setAbout] = useState("");
    const { speak } = useSpeechSynthesis();
    const msg = new SpeechSynthesisUtterance()
    msg.text = about

    useEffect(() => {
        window.speechSynthesis.speak(msg)
    }, [about])


    function hearAbout(){
        setAbout("Hi there! Welcome to Barr-it!!This an app with the aim of giving more independence and confidence to those who are visually impaired.To use, simply head to the home page scan the barcode of the item you wish to learn more about and wait for the app to work its magic. You should receive back an audio description of the product with loads of useful information!Of course we are an app aimed at making the world a more accessible and inclusive place, and so users can modify their settings. Audio description can be turned off and dark or light mode can be selected based on your preferences. We hope you find this app useful and happy scanning!!")
        // setAbout("")
    }


    return(<>
      <p>Hi there! Welcome to Barr-it!!</p>
      <p>This an app with the aim of giving more independence and confidence to those who are visually impaired.</p>
      <p>To use, simply head to the home page scan the barcode of the item you wish to learn more about and wait for the app to work its magic. You should receive back an audio description of the product with loads of useful information!</p>
      <p>Of course we are an app aimed at making the world a more accessible and inclusive place, and so users can modify their settings. Audio description can be turned off and dark or light mode can be selected based on your preferences. </p>
      <p>We hope you find this app useful and happy scanning!! </p>
      <button id="aboutBtn" onClick={() => hearAbout()}>Press to hear Audio</button>
    </>)

}


export default About;
