import {useContext} from "react";
import {CountContext} from "../context/CountContext.jsx";

export default function ComponentD() {
    const {count, dispatch} = useContext(CountContext);

    return (
        <div>
            <p>Count - {count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}