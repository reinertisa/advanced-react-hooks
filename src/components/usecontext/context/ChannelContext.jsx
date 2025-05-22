import {createContext} from 'react';

export const ChannelContext = createContext('');

export default function ChannelContextProvider({children}) {

    return (
        <ChannelContext.Provider value="Fuzzy Channel">
            {children}
        </ChannelContext.Provider>
    )
}