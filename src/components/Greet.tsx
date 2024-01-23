type GreetProps={
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
    
}


const Greet=(props:GreetProps)=>{
    const {messageCount=0}=props
    return <>
    <h2>{props.isLoggedIn?`Hello,${props.name} how are you. You have ${messageCount} messages`:"welcome guest"}</h2>
    </>
};

export default Greet;