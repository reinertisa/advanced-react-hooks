import {useState, useEffect} from 'react';

export default function MouseEvent2() {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const logMouseFn = (e) => {
            setPosX(e.clientX);
            setPosY(e.clientY);
        }

        window.addEventListener('mousemove', logMouseFn);

        return () => {
            console.log('cleanup');
            window.removeEventListener('mousemove', logMouseFn);
        }
    }, []);

    const handleToggle = () => setToggle(!toggle);

    return (
        <div>
            <button onClick={handleToggle}>Toggle display</button>
            {!toggle && (
                <>
                    <div>x - {posX}</div>
                    <div>y - {posY}</div>
                </>
            )}
        </div>
    )
}