import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./styles/base";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {routerConfigs} from '../src/router/config'

ReactDOM.render(
    <div className='root'>
        <GlobalStyle/>
        <Router>
            <Route exact path='/' render={() => <Redirect to='/login'/>}/>
            {routerConfigs.map((route, index) =>
                <Route key={index} path={route.path} component={route.component}/>
            )}
        </Router>
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
