import React, { Component, PureComponent, useState } from 'react';

class IsPureComponent extends PureComponent {
	render() {
		return (
			<div>
				<div>-----</div>
				<div>PureComponent render: {this.props.value}</div>
				<div>Render be Called: {Math.random()}</div>
			</div>
		);
	}
}

class NonComponent extends Component {
	render() {
		return (
			<div>
				<div>-----</div>
				<div>Non PureComponent render: {this.props.value}</div>
				<div>Render be Called: {Math.random()}</div>
			</div>
		);
	}
}

const Wrapper = () => {
	const [state, setState] = useState(0);
	const [value, setValue] = useState(0);

	return <div>
		<div>click the followig buttons will change Component1 and Component2 props</div>
		<button onClick={() => setValue(Math.random())}>click to change state but not pass props (Component will be rendered, but not pure component)</button>
		<button onClick={() => setState(Math.random())}>click to change state and pass props to two components</button>
		<div>Current passed props value = {state}</div>
		<div>Current NOT passed props value = {value}</div>
		<IsPureComponent state={state}/>
		<NonComponent state={state}/>
	</div>
}

export default Wrapper;




