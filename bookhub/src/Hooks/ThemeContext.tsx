import {createContext, Dispatch} from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);