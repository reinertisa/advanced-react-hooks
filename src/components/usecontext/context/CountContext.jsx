import {createContext, useReducer} from 'react';
import {counterReducer, initialCount} from "../reducers/counterReducer.js";

export const CountContext = createContext(0);

export default function CountContextProvider({children}) {
    const [count, dispatch] = useReducer(counterReducer, initialCount)

    return (
        <CountContext.Provider value={{count, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}