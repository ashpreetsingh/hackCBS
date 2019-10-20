import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Area from "./components/area"
import {Route,BrowserRouter} from "react-router-dom"
import Home from "./components/home"
const app=(
    <BrowserRouter>
    <Route exact path="/" component={Area} />
    <Route exact path="/home/:area" component={Home} />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
