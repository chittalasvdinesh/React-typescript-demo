import { Login } from "./Login"
import { ProfileProps } from "./Profile"

// type PrivateProps={
//     isLoggedIn:boolean,
//     component:React.ComponentType<ProfileProps>
// } // use this for seperation of type code

export const Private=({isLoggedIn,component:Component}:{isLoggedIn:boolean,component:React.ComponentType<{name:string} >})=>{
    if(isLoggedIn){
       return <Component name="Dinnu"/>
    }
    return <Login/>
}