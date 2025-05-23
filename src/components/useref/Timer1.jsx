import {useState, useRef, useEffect} from 'react';

export default function Timer1() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const tick = () => setTimer( prevTimer => prevTimer + 1);
        if (toggle) {
            setTimer(0)
            intervalRef.current = setInterval(tick, 1000)
        } else {
            // setTimer(0)
        }

        return () => clearInterval(intervalRef.current);
    }, [toggle])

    const toggleTimer = () => {
        if (toggle) {
            clearInterval(intervalRef.current);
        }
        setToggle(!toggle);
    }

    return (
        <div>
            Timer - {timer}
            <button onClick={toggleTimer}>{toggle ? 'Stop' : 'Restart'}</button>
        </div>
    )
}