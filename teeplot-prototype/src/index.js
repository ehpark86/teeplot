import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';

import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom'

import { Route, Link,Router } from 'react-router';
import { domainToASCII } from 'url';




ReactDOM.render(

<App />

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
