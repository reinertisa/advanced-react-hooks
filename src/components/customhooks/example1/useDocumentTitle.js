import {useState, useEffect} from "react";

export default function useDocumentTitle(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    const handleClick = () => setCount(count + 1);

    return {count, setCount, handleClick}
}