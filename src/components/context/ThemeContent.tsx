import React, { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext=createContext(theme);

export const ThemeContextProvider=({children}:{children:React.ReactNode})=>{
     return <ThemeContext.Provider value={theme}>
        {children}
     </ThemeContext.Provider>
}