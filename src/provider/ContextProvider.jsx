"use client"

const { createContext } = require("react")

export const Context = createContext()

const ContextProvider =({children}) =>{
     const info = {
        user: 'name'
     }
     
     return(
        <Context.Provider value={info}>
            {children}
        </Context.Provider>

     ); 
}; 

export default ContextProvider; 

