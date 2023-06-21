import { createContext, useState } from "react";

export const ContextApp = createContext()

export const ContextProvider = ({children}) =>{
    const [nombreUsuario, setNombreUsuario] = useState("")
    
    return(
        <ContextApp.Provider value={{nombreUsuario, setNombreUsuario}}>
            {children}
        </ContextApp.Provider>
    ) 
}