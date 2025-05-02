import { createContext, useState } from "react"

const ThemeContext =  createContext()
function ThemeProvider(props){
    const [darkMode, setDarkMode] = useState(false)
    const toggleMode = () => {
        setDarkMode(prev => !prev)
    }
  return (
   <> <ThemeContext.Provider value={{darkMode,toggleMode}}>
   {props.children}
</ThemeContext.Provider></>
  )
}

export {ThemeContext,ThemeProvider}
