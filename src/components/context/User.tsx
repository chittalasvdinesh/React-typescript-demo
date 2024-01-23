import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const User = () => {
    const userContext=useContext(UserContext)
    const handleLogin = () => {
    //   if(userContext){ 
        // if type assertion not used then include if condition because of null value
        userContext.setUser({
            name:"dinesh",
            email:"dinesh@gmail.com"
        })
    //   }
    }
    const handleLogout = () => {
        // if(userContext){
            userContext.setUser(null)
        // }
    }

    return <>
        {!userContext?.user?<button onClick={handleLogin}>Login</button>
        :<button onClick={handleLogout}>Logout</button>}
        <div>
            <div>User name is {userContext?.user?.name}</div>
            <div>Email is {userContext?.user?.email}</div>

        </div>
    </>
};

export default User