import React, { useState, memo } from 'react';


function Demo(props) {
	const {state, index} = props;
	return <div>
		<div>-----</div>
		<div>{index === 1? 'Memo component' : 'Normal component'} render: {state}</div>
		<div>Render be Called: {Math.random()}</div>
	</div>
}

const MemoDemo = memo(Demo);

const Parent = () => {
	const [state, setState] = useState(0);
	const [value, setValue] = useState(0);

	return <div>
		<div>click the followig buttons will change Component1 and Component2 props</div>
		<button onClick={() => setValue(Math.random())}>click to change state but not pass props (Component will be rendered, but not memo one)</button>
		<button onClick={() => setState(Math.random())}>click to change state and pass props to two components</button>
		<div>Current passed props value = {state}</div>
		<div>Current NOT passed props value = {value}</div>
		<MemoDemo state={state} index={1}/>
		<Demo state={state} index={2}/>
	</div>
}

export default Parent;