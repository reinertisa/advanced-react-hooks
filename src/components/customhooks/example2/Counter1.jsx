import useCounter from "./useCounter.js";
import CounterButtons from "./CounterButtons.jsx";
import Title from "./Title.jsx";

const initialCount = 0;

export default function Counter1() {
    const {count, increment, decrement, reset} = useCounter({initialCount, value: 1});

    return (
        <div>
            <Title count={count}>First Counter</Title>
            <CounterButtons increment={increment} decrement={decrement} reset={reset} />
        </div>
    )
}