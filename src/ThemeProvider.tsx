import {createContext, ReactNode, useState} from "react";
import {CustomProvider} from "rsuite";

type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

type RootComponentProps = {
  children: ReactNode
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}:RootComponentProps) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setTheme((prevState)=>prevState === 'dark' ? 'light' : 'dark')
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <CustomProvider theme={theme} >
      {children}
    </CustomProvider>
    </ThemeContext.Provider>
  )
};

