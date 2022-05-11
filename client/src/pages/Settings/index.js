
import React, { useState, useEffect } from 'react';
import './style.css'
import Quagga from 'quagga';




function Settings (){
    Quagga.stop()
    const [audiodescription, setAudiodescription] = useState(true)
    const [darkmode, setDarkmode] = useState(false)

    useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(darkmode));
      }, [darkmode]);

      useEffect(() => {
        localStorage.setItem('audiodescription', JSON.stringify(audiodescription));
      }, [audiodescription]);

      let audioSettings = ''
      let modeSettings = ''

      if(audiodescription === true){
          audioSettings = true
      } else {
          audioSettings = false
      }

      if(darkmode === true){
          modeSettings = true
      } else {
          modeSettings = false
      }

      const toggleAudio = () => {
          
        setAudiodescription(!audioSettings)
      }

      const toggleMode = () => {
          
        setDarkmode(!modeSettings)
      }



    
    return(
        <section>
            <h1 role="heading">Settings page</h1>
            <section className="toggle">
                <span className='label'>Audio Description:</span>
                <label className="toggle-switch">
                    <input id='audioToggle' type="checkbox" checked={audioSettings} onChange={() => toggleAudio()} />
                    <span className="switch" />
                </label>
            </section>
            <section className="toggle">
                <span className='label'>Darkmode:</span>
                <label className="toggle-switch">
                    <input id='audioToggle' type="checkbox" checked={modeSettings} onChange={() => toggleMode()} />
                    <span className="switch" />
                </label>
            </section>
        </section>
    )


}


export default Settings;
