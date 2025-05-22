import {useMemo, useState} from "react";

export default function Count1() {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    const incrementFirstCount = () => setFirstCount(firstCount + 1);
    const incrementSecondCount = () => setSecondCount(secondCount + 1);

    const isEven = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { /* empty */ }
        return firstCount % 2 === 0;
    }, [firstCount])


    return (
        <div>
            <div>
                <button onClick={incrementFirstCount}>Count One - {firstCount}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <button onClick={incrementSecondCount}>Count Two - {secondCount}</button>
        </div>
    )
}