import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/index";
import Navbar from "./navbar"
import { About, Home, Settings, NotFound, PreviousSearch, SignUp, LoginPage } from './pages/index';


function App() {

    return (<>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
            <Route path="previous" element={<PreviousSearch />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element = {<NotFound />} />
        </Routes>
    </>)



}

export default App;
