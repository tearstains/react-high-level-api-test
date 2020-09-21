/*
	You may rely on useMemo as a performance optimization, not as a semantic guarantee.
	In the future, React may choose to “forget” some previously memoized values and recalculate them on next render,
	e.g. to free memory for offscreen components.
	Write your code so that it still works without useMemo — and then add it to optimize performance.
*/
import React, { useState, useMemo } from 'react';

function MemoComp(props) {
	const value = useMemo(()=>{
		// some expensive computing
		// 表示當state沒變時 我們不需要重新用state去算出複雜的value 節省時間
		return Math.random() + Math.random() + props.state;
	}, [props.state]);

	return <div>
		current value = {value}
	</div>
}


function Parent() {
	const [state, setState] = useState(0);
	const [value, setValue] = useState(0);

	return <div>
		<div>click the followig buttons will change Component1 and Component2 props</div>
		<button onClick={() => setValue(Math.random())}>click to change state but not pass props</button>
		<button onClick={() => setState(Math.random())}>click to change state and pass props</button>
		<div>Current passed props value = {state}</div>
		<div>Current NOT passed props value = {value}</div>
		<MemoComp state={state} index={1}/>
		<Test state={state}/>
	</div>
}

// memo class component
// state還是會被memo起來 但這個是react team故意的 不過主流沒要你這樣用的意思
// https://github.com/facebook/react/issues/13937
const Test = React.memo(class extends React.Component {
  render () {
  	console.log('call render');
    return <h1>TEST</h1>
  }
});

export default Parent;