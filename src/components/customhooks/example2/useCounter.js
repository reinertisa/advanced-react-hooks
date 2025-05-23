import {useState} from 'react'

export default function useCounter({initialCount = 0, value = 1}) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + value);
    const decrement = () => setCount(count - value);
    const reset = () => setCount(initialCount);

    return {count, increment, decrement, reset};
}