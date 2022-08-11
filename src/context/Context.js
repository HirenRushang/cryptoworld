import React, { useState } from 'react'
import { createContext } from 'react'
import useLocalStorage from "use-local-storage";


export const ThemeContext = createContext()


const Context = ({children}) => {

  const [theme,settheme] = useLocalStorage("light")


  const toggleTheme = ()=>{
      settheme((curr)=> (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default Context