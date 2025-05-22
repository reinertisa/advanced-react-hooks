import {useReducer} from 'react';

const initialCount= 0;

function counterReducer(state, action) {
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialCount;
        default:
            return state;
    }
}

export default function Counter1() {
    const [count, dispatch] = useReducer(counterReducer, initialCount);

    const handleIncrement = () => dispatch({type: 'increment'});
    const handleDecrement = () => dispatch({type: 'decrement'});
    const handleReset = () => dispatch({type: 'reset'});

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <p>Count - {count}</p>
        </div>
    )

}