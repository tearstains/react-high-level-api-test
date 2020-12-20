import React, { createRef, useRef, useState, Component } from 'react'

export class CreateRefExp extends Component {
	constructor(props) {
		super(props);
		this.input = createRef();
		this.onChange = this.onChange.bind(this);
		this.state = {
			val: 0
		}
	}

	onChange(e) {
		// console.log('print class component val')
		// console.log(e.target.value)
		// console.log(this.input.current.value)
		this.forceUpdate(); // force update to see the ref value
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.input} onChange={this.onChange}/>
				<div>get value from ref = {this.input.current?.value}</div>
			</div>
		);
	}
}




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

	const inputRef = useRef();
	const [username, setUsername] = useState('josh');

	return (
		<div>
			<input type="text" val={val} onChange={(e) => {setVal(e.target.value)}}/>
			ref create by createRef = {refFromCreateRef.current}
			<div></div>
			ref create by useRef = {refFromUseRef.current}
			<br/>
			rerender = {Math.random()}

			<div>------create ref bind with class component-----</div>
			<CreateRefExp />

			<div>------use ref bind with functional component-----</div>
			<input type="text" ref={inputRef} onChange={(e) => setUsername(e.target.value)} value={username}/>
			<div>see current username = {inputRef.current?.value}</div> {/*第一次還拿不到值, 因為input還沒mount*/}
		</div>
	)
}


export default InputWithRef