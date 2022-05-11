import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/index";
import { About, Home, Settings, NotFound, PreviousSearch, SignUp, LoginPage, LogoutPage} from './pages/index';
import "./App.css"



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
            <Route path="logout" element={<LogoutPage />} />
            <Route path="*" element = {<NotFound />} />
        </Routes>
    </>)



}

export default App;
