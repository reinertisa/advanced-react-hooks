import {useState, useEffect} from 'react';
export default function DocumentTitle1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            <button onClick={incrementCount}>Click {count} times</button>
        </div>
    )
}