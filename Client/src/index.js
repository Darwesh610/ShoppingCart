import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>


);

