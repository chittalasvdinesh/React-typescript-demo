type ButtonProps={
    variant:'primary'|'secondary',
    children:string
    
} & Omit<React.ComponentProps<'button'>,"children"> // suppose the children should be only string

export const  CustomButton=({variant,children,...rest}:ButtonProps)=>{
    return <button className={`btn-${variant}`} {...rest}>{children}</button>
}