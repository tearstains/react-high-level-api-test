import React, { createRef, useRef, useState } from 'react'

function InputWithRef() {
	const [val, setVal] = useState(0);
	const refFromCreateRef = createRef();
	const refFromUseRef = useRef()

	if (!refFromUseRef.current) {
		refFromUseRef.current = val
	}

	if (!refFromCreateRef.current) {
		refFromCreateRef.current = val
	}

	return (
		<div>
			<input type="text" val={val} onChange={(e) => {setVal(e.target.value)}}/>
			ref create by createRef = {refFromCreateRef.current}
			<div></div>
			ref create by useRef = {refFromUseRef.current}
			<br/>
			rerender = {Math.random()}
		</div>
	)
}

export default InputWithRef