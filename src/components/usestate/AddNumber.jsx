import {useState} from 'react';
import {v4 as uuid} from 'uuid';

export default function AddNumber() {
    const [items, setItems] = useState([]);

    const addNumber = () => setItems([...items, {
        id: uuid(),
        value: Math.floor(Math.random() * 10)
    }]);

    return (
        <div>
            <button onClick={addNumber}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}