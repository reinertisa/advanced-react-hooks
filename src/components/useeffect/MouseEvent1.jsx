import {useState, useEffect} from 'react';

export default function MouseEvent1() {

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    useEffect(() => {
        const logMousePosition = (e) => {
            setPosX(e.clientX);
            setPosY(e.clientY);
        }
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <div>
            <div>x - {posX}</div>
            <div>y - {posY}</div>
        </div>
    )

}