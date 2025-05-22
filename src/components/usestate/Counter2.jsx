import {useState} from 'react';

export default function Counter2() {
    const [count, setCount] = useState(0);

    const incrementOne = () => setCount(count + 1);
    const decrementOne = () => setCount(count - 1);
    const incrementFive = () => setCount(count + 5);
    const decrementFive = () => setCount(count - 5);
    const reset = () => setCount(0);

    return (
        <div>
            Counter - {count}
            <button onClick={incrementOne}>Increment one</button>
            <button onClick={decrementOne}>Decrement one</button>
            <button onClick={incrementFive}>Increment Five</button>
            <button onClick={decrementFive}>Decrement Five</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}