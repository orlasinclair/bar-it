import React, { useState, useEffect } from 'react';
import { getUserSettings, updateUserSettings } from '../../actions';
import './style.css'
//import {BackButton} from '../../components'


function Settings (){

    const [audiodescription, setAudiodescription] = useState()
    const [darkmode, setDarkmode] = useState()

    useEffect(() => {
        async function getData () {
            const data = await getUserSettings();
            setAudiodescription(data.audiodescription)
            setDarkmode(data.darkmode)
        }
        getData()
    }, [])



    const postAudio = async () => {
        const data = new URLSearchParams()
        data.append('audiodescription', !audiodescription)
        updateUserSettings(data)
        const updatedData = await updateUserSettings(data)
        setAudiodescription(updatedData[0].fields.audiodescription)
    }

    const postMode = async () => {
        const data = new URLSearchParams()
        data.append('darkmode', !darkmode)
        updateUserSettings(data)
        const updatedData = await updateUserSettings(data)
        setDarkmode(updatedData[0].fields.darkmode)
    }

    let audioSetting = ''
    let darkmodeSetting = ''

    if(audiodescription == true){
        audioSetting = true
    }else{ audioSetting=false}

    if(darkmode == true){
        darkmodeSetting = true
    }else{ darkmodeSetting=false}

    return(
        <section>
            <h1 role="heading">Settings page</h1>
            <section class="toggle">
                <span class='label'>Audio Description:</span>
                <label className="toggle-switch">
                    <input id='audioToggle' type="checkbox" checked={audioSetting} onChange={() => postAudio()} />
                    <span className="switch" />
                </label>
            </section>
            <section class="toggle">
                <span class='label'>Darkmode:</span>
                <label className="toggle-switch">
                    <input id='audioToggle' type="checkbox" checked={darkmodeSetting} onChange={() => postMode()} />
                    <span className="switch" />
                </label>
            </section>
        </section>
    )

}


export default Settings;
