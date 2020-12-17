import React, {useReducer} from 'react';

function init(initialCount) {
    // user can do some changes to update real initil values
    return { count: initialCount + 100 };
}
  
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 11, init);
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({type: 'reset', payload: 10})}>
                Reset
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}