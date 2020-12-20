import { createContext } from 'react';
import Home from '../Home';
import PureComponentExp from '../components/PureComponentExp';
import Memo from '../components/Memo';
import UseMemoHooks from '../components/UseMemoHooks';
import ContextTest from '../components/ContextTest'
import CountComponent from '../components/CountComponent';
import CallbackCompnent from '../components/CallbackCompnent';
import InputWithRef from '../components/InputWithRef';
import ForwardRefComponent from '../components/ForwardRefComponent';

const routeConfig = [
	{
		path: '/forward-ref',
		component: 'ForwardRefComponent',
		name: 'forward ref'
	},
	{
		path: '/create-ref',
		component: 'InputWithRef',
		name: 'create ref'
	},
	{
		path: '/use-callback',
		component: 'CallbackCompnent',
		name: 'use callback'
	},
	{
		path: '/use-reducer',
		component: 'CountComponent',
		name: 'use reducer page'
	},
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
	}
];

export const routesMap = {
	Home,
	PureComponentExp,
	Memo,
	UseMemoHooks,
	ContextTest,
	CountComponent,
	CallbackCompnent,
	InputWithRef,
	ForwardRefComponent
}

export const RoutesContext = createContext(routeConfig);

export default routeConfig;
