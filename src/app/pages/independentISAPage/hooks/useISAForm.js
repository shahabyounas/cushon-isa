import { useState } from "react";

export function useISAForm(data){

    const [state, setState] = useState(data)

    function eventHandler(event){
        const { name, value } = event.target
        setState((state) => ({...state, [name]: value }))
    }

    function updateStateHandler(data){
        setState(state => ({ ...state, fund: data }))
    }

    return {
        state,
        eventHandler,
        updateStateHandler
    }
}
