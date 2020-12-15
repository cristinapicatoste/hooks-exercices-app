import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncr } from './ShowIncr';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1);
    }

    const incr = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <ShowIncr increment={incr} />
        </>
    )
}
