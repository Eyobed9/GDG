import {createContext, Dispatch} from 'react';

interface UserAuthContextType {
    loggedIn: boolean;
    setLoggedIn: Dispatch<React.SetStateAction<boolean>>;
}

export const UserAuthContext = createContext<UserAuthContextType>({} as UserAuthContextType);