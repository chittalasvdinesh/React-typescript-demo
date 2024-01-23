import React, { createContext, useState } from "react"




export type AuthUser={
    name:string,
    email:string
};

export type UserContextType={
    user:AuthUser|null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext=createContext<UserContextType >({} as UserContextType);

export const UserContextProvider=({children}:{children:React.ReactNode})=>{
    const[user,setUser]=useState<AuthUser|null>(null);
  return <>
  <UserContext.Provider value={{user,setUser}}>
    {children}
  </UserContext.Provider>
  </>
}