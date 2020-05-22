import { createContext } from 'react';
import Home from '../Home';
import PureComponentExp from '../components/PureComponentExp';
import Memo from '../components/Memo';
import UseMemoHooks from '../components/UseMemoHooks';

const routeConfig = [
	{
		path: '/pure-component',
		component: 'PureComponentExp',
		name: 'Pure comonent'
	},
	{
		path: '/memo',
		component: 'Memo',
		name: 'React Memo'
	},
  {
		path: '/useMmeo',
		component: 'UseMemoHooks',
		name: 'use Memo Hooks'
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
	Memo,
	UseMemoHooks,
}

export const RoutesContext = createContext(routeConfig);

export default routeConfig;
