type InputProps={
    value:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input=({value,handleChange}:InputProps)=>{
    return <input type="text" value={value} onChange={handleChange} />
};

export default Input;