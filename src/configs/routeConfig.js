import { createContext } from 'react';
import Home from '../Home';
import PureComponentExp from '../components/PureComponentExp';

const routeConfig = [
	{
		path: '/pure-component',
		component: 'PureComponentExp',
		name: 'Pure comonent'
	},
	{
		path: '/',
		component: 'Home',
		name: 'Home page'
	},
];

export const routesMap = {
	Home,
	PureComponentExp,
}

export const RoutesContext = createContext(routeConfig);

export default routeConfig;
