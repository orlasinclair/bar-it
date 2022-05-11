
import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';
import './style.css'
import {InputGroup} from 'reactstrap'
import '../../App.css';
import { ThemeContext, themes } from '../../components/Darkmode/themeContext';




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

      if(audiodescription === true ){
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
                <span className='label text-warning'>Darkmode:</span>
                <InputGroup>
                <ThemeContext.Consumer>
                {({ changeTheme }) => (
                <label className="toggle-switch">
                    <input
                    color="link"
                    onClick={() => {
                        setDarkmode(darkmode);
                        changeTheme(!darkmode ? themes.light : themes.dark);
                      }}
                    id='modeToggle' type="checkbox" checked={modeSettings} onChange={() => toggleMode()} />
                    <span className="switch" />
                    <i className={darkmode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                    <span className="d-lg-none d-md-block">Switch mode</span>
                </label>
                )}
                </ThemeContext.Consumer>
                </InputGroup>
            </section>
        </section>
    )


}


export default Settings;
