import React from 'react';
import './zero.css';
import './style.css';
import ReactDOM from 'react-dom/client';
import { AppSuperstructure } from './app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const HTMLElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(HTMLElement);

root.render(<AppSuperstructure />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
