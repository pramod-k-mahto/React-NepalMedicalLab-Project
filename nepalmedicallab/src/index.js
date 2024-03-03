import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from "react";
 export const appContext=createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    {/* <appContext.Provider value={{Number:Number}}> */}
    <App />

    {/* </appContext.Provider> */}

    </BrowserRouter>

)
