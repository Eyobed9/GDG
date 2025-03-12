import {ReactNode, useState} from 'react';
import { UserAuthContext } from './UserAuthContext';

interface UserAuthProviderProps {
    children: ReactNode;
}

export const UserAuthProvider = ({children}:UserAuthProviderProps) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <UserAuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </UserAuthContext.Provider>
    )
}