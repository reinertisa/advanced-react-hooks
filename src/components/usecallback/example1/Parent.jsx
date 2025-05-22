import {useState, useCallback} from 'react';

import Title from "./Title.jsx";
import Count from "./Count.jsx";
import Button from "./Button.jsx";

export default function Parent() {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(5000);

    const incrementAge = useCallback(() => setAge(age + 1), [age])
    const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

    return (
        <div>
            <Title />
            <Count text="Age" value={age} />
            <Button handleIncrement={incrementAge}>Increment Age</Button>
            <Count text="Salary" value={salary}/>
            <Button handleIncrement={incrementSalary}>Increment Salary</Button>
        </div>
    )
}