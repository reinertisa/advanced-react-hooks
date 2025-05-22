import {useState, useEffect} from 'react';

export default function Timer1() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const tick = () => setTimer(prevTimer => prevTimer + 1);
        const intervalId = setInterval(tick, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div>Timer - {timer}</div>
        </div>
    )

}