import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/index";
import { About, Home, Settings, NotFound } from './pages/index';



function App() {
    return (<>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element = {<NotFound />} />
        </Routes>
    </>)



}

export default App;