import { createContext } from 'react';
import Home from '../Home';
import PureComponentExp from '../components/PureComponentExp';
import Memo from '../components/Memo';
import UseMemoHooks from '../components/UseMemoHooks';
import ContextTest from '../components/ContextTest'


const routeConfig = [
	{
		path: '/context-text',
		component: 'ContextTest',
		name: 'Context test page'
	},
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
	ContextTest,
}

export const RoutesContext = createContext(routeConfig);

export default routeConfig;
