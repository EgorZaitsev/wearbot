import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {useSDK, SDKProvider} from "@twa.js/sdk-react";


function Loader({children}) {
    const {didInit, components, error} = useSDK();

    // There were no calls of SDK's init function. It means, we did not
    // even try to do it.
    if (!didInit) {
        return <div>SDK init function is not yet called.</div>;
    }

    // Error occurred during SDK init.
    if (error !== null) {
        return <div>Something went wrong.</div>;
    }

    // If components is null, it means, SDK is not ready at the
    // moment and currently initializing. Usually, it takes like
    // several milliseconds or something like that, but we should
    // have this check.
    if (components === null) {
        return <div>Warming up SDK.</div>;
    }

    // Safely render application.
    return <>{children}</>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SDKProvider>
          <Loader>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </Loader>
      </SDKProvider>
  </React.StrictMode>
);

