import {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
}

const counterReducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + (action?.value ?? 1)};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - (action?.value ?? 1)};
        case 'incrementTwo':
            return {...state, secondCounter: state.secondCounter + 1};
        case 'decrementTwo':
            return {...state, secondCounter: state.secondCounter - 1};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function Counter2() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <div>First counter: {state.firstCounter}</div>
            <div>Second counter: {state.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment'})}>Increment First Counter</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement First Counter</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment First Counter by 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement First Counter by 5</button>
            <button onClick={() => dispatch({type: 'incrementTwo'})}>Increment Second Counter</button>
            <button onClick={() => dispatch({type: 'decrementTwo'})}>Decrement Second Counter</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}