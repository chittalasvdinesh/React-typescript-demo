import { useState } from "react";

const LoggedIn = () => {
    const[logStatus,setLogStatus]=useState(false)
    const handleLogin = () => {
         setLogStatus(true)
    }
    const handleLogout = () => {
        setLogStatus(false)
    }

    return <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>
            user is {logStatus?"Logged In":"Logged Out"}
        </div>
    </>
};

export default LoggedIn