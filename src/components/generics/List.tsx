type ListProps<T>={
    items:T[],
    onClick:(val:number)=>void
}

export const List=<T extends {id:number,name:string}>({items,onClick}:ListProps<T>)=>{
    return <div>
        <h2>List of items</h2>
        <div>
           {items.map((val)=>{
            return (
                <div key={val.id} onClick={()=>onClick(val.id)}>{val.name}</div>
            )
           })}
        </div>
    </div>
}