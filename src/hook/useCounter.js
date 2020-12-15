import { useState } from 'react';

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);
    const reset = () => {
        setCounter(initialState)
    }
    const inc = () => {
        setCounter(counter + 1)
    }
    const dec = () => {
        setCounter(counter - 1)
    }
    return {
        reset,
        counter,
        inc,
        dec
    }
}
