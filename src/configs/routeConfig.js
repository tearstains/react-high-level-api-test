import { createContext } from 'react';
import Home from '../Home';
import PureComponentExp from '../components/PureComponentExp';

const routeConfig = [
	{
		path: '/pure-component',
		component: 'PureComponentExp'
	},
	{
		path: '/',
		component: 'Home'
	},
];

export const routesMap = {
	Home,
	PureComponentExp,
}

export const RoutesContext = createContext(routeConfig);

export default routeConfig;
