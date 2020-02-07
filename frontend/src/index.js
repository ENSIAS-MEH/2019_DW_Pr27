import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import { InfoProvider } from './Components/context'



ReactDOM.render
    (<InfoProvider>
        <Router>
            <App />
        </Router>
    </InfoProvider>
        , document.getElementById('root'));


