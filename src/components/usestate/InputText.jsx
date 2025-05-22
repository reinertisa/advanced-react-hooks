import {useState} from 'react';

export default function InputText() {
    const [name, setName] = useState({firstName: '', lastName: ''});

    const handleFirstName = (e) => setName({...name, firstName: e.target.value});
    const handleLastName = (e) => setName({...name, lastName: e.target.value});

    return (
        <div>
            <input type="text" value={name.firstName} onChange={handleFirstName} />
            <input type="text" value={name.lastName} onChange={handleLastName} />
            <p>{JSON.stringify(name)}</p>
        </div>
    )
}