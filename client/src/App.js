import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppMap from './AppMap';
import { NavBar } from "./components/index";
import { About, Home, Settings, NotFound, PreviousSearch, SignUp, LoginPage } from './pages/index';
import MapContainer from "./components/BCS/MapContainer"
const google = window.google;



function App() {

    return (<>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
            <Route path="previous" element={<PreviousSearch />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element = {<NotFound />} />
            <Route path="appMap" element = {<MapContainer />} />
        </Routes>
    </>)



}

export default App;
