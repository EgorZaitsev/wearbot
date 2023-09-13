import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {SDKProvider} from "@twa.js/sdk-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SDKProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SDKProvider>
  </React.StrictMode>
);

