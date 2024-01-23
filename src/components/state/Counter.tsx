import { useReducer } from "react";

type UpdateAction = {
    type: "inc" | "dec",
    payload: number
}

type ResetAction = {
    type: "reset"
}


type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 };


function reducer(state: { count: number }, action: CounterAction) {
    switch (action.type) {
        case 'inc':
            return { count: state.count + action?.payload }
        case 'dec':
            return { count: state.count - action?.payload }
        case 'reset':
            return initialState
        default:
            return state;
    }
}



export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return <>
        Count: {state.count}
        <div>
            <button onClick={() => dispatch({ type: "inc", payload: 10 })}>INC</button>
            <button onClick={() => dispatch({ type: "dec", payload: 10 })}>DEC</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    </>
};