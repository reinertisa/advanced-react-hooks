import {useState, useRef, useEffect} from 'react';

export default function FocusInput1() {
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    console.log(inputRef);

    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef.current);
    }, [])

    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <input ref={inputRef} type="text" value={name} onChange={handleChange} />
        </div>
    )
}