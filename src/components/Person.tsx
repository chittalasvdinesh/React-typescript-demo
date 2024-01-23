import { PersonProps } from "./Person.types";

const Person=(props:PersonProps)=>{

    return  <ul>
        {props.familyList.map((val)=>{
            return <li key={val.last}>{val.first} {val.last}</li>
        })}
    </ul>
};

export default Person;