import {useContext} from 'react';
import {UserContext} from "../context/UserContext.jsx";

export default function ComponentD() {
    const user = useContext(UserContext);
    return (
        <div>
            Component D - {user}
        </div>
    )
}