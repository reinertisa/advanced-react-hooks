import {useContext} from 'react';
import {UserContext} from "../context/UserContext.jsx";

export default function ComponentA() {
    const user = useContext(UserContext);

    return (
        <div>
            Component A - {user}
        </div>
    )
}