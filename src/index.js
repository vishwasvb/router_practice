import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'


// This <BrowserRouter></BrowserRouter> Component grabs the history object in browsers and passes it down to the Component tree.
// so any where in our component tree we will be able to use history object. 
ReactDOM.render(

<BrowserRouter>
    <App />
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
