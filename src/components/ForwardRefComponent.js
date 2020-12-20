import React, { useRef, useEffect, Component } from 'react'

// Forward ref to functional component DOM
const ForwardRefInput = React.forwardRef((props, ref) => {
	return <div>
		<label> Username: </label>
		<input type="text" ref={ref} {...props}/>
	</div>
});

// Forward ref to HOC component
function logComponent(WrappedComponent) {
	class LogProps extends React.Component {
		componentDidUpdate(prevProps, prevState) {
			console.log(prevProps, prevState);
		}
		render() {
			const { forwardedRef, ...restProps } = this.props;

			return (
				<div>
					<WrappedComponent ref={forwardedRef} {...restProps} />
				</div>
			)
		}
	}

	return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export class Button extends Component {
	render() {
		return (
			<button>Click me!</button>
		);
	}
}


const ButtonWithLog = logComponent(Button);


function ForwardRefComponent() {
	const inputRef = useRef();
	const logComponentRef = useRef();

	useEffect(() => {
		inputRef.current.focus(); // default focus input ref
	}, []);

	useEffect(() => {
		console.log(logComponentRef.current) // now point to Button instance
	}, [])

	return (
		<div>
			<ForwardRefInput ref={inputRef} className={'input-class-name'}/>
			<ButtonWithLog ref={logComponentRef}/>
		</div>
	)
}

export default ForwardRefComponent;