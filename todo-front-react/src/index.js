import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter as Router, Route } from 'react-router-dom';

let store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={ App } />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
