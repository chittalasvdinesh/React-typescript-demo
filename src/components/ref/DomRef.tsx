import React, { useEffect, useRef } from "react"

export const DomRef=()=>{
    const inputRef=useRef<HTMLInputElement>(null!); // allows to use focus without optional chaining 

    useEffect(()=>{
      inputRef.current.focus()
    },[])


    return<>
    <input type="text" ref={inputRef} />
    </>
}