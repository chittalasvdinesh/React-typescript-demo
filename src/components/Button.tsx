 const Button=({handleClick}:{handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void})=>{
    return <button onClick={(event)=>handleClick(event,1)}>Click</button>
};

export default Button;