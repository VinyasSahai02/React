import { useState } from 'react';

export const useToggle=(initialValue=false)=>{
    const [state,setState] = useState(initialValue);

    const toggle=()=>{
        setState((prev)=>!prev)
    }

    return [state,toggle];
    //array is passed as to change state to isvisible when we start using the toggle hook
}