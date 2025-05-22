import {useState} from 'react';

export default function Counter1() {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <button onClick={handleClick}>Count - {count}</button>
        </div>
    )
}