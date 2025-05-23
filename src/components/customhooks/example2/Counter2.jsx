import useCounter from "./useCounter.js";
import CounterButtons from "./CounterButtons.jsx";
import Title from "./Title.jsx";

const initialCount = 10;
export default function Counter2() {

    const {count, increment, decrement, reset} = useCounter({initialCount, value: 5});

    return (
        <div>
            <Title count={count}>Second Counter</Title>
            <CounterButtons increment={increment} decrement={decrement} reset={reset} />
        </div>
    )
}