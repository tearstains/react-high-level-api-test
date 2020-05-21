import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import routeConfig, { routesMap } from './configs/routeConfig';

const getRoute = (routeConfig) => {
	return routeConfig.map( (r, idx) => {
		const Handler = routesMap[r.component];
		return <Route path={r.path} component={Handler} key={idx}/>;
	});
}

function Routes() {
	const Routes = getRoute(routeConfig);
  return (
    <Router>
      <Switch>
    	  {Routes}
      </Switch>
    </Router>
  );
}

export default Routes;