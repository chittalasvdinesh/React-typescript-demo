import { useState } from "react";

type AuthUser={
    name:string,
    email:string
}

export const User = () => {
    const[user,setUser]=useState<null|AuthUser>(null);
    const handleLogin = () => {
        setUser({name:"Dinesh",email:"dinesh@gmail.com"})
   }
   const handleLogout = () => {
    setUser(null)
   }
    return <>
     <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>
            <p>UserName:{user?.name}</p>
            <p>Email:{user?.email}</p>

        </div>
    </>
}