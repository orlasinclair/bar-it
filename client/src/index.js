import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import ThemeContextWrapper from './components/Darkmode/themeContextWrapper';

ReactDOM.render(
    <ThemeContextWrapper>
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
    </ThemeContextWrapper>,
    document.getElementById("root"));

