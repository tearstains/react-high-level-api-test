import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routeConfig, { RoutesContext } from './configs/routeConfig';
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

ReactDOM.render(
  <React.StrictMode>
  	<RoutesContext.Provider value={routeConfig}>
    	<App />
    </RoutesContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);