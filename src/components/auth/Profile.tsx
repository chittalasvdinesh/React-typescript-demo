
export type ProfileProps={
    name:string
}

export const Profile=({name}:{name:string})=>{
    return <div>Private Profile component-{name}</div>
}