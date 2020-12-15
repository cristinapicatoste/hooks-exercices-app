import React from 'react'
import { useCounter } from '../../hook/useCounter'

export const CounterCustomHook = () => {

    const { reset, state, inc, dec } = useCounter(100);

    return (
        <>
            <h1>Counter Hook: {state}</h1>
            <button className="add" onClick={() => inc(3)}>+1</button>
            <button onClick={reset}>Reset</button>
            <button className="add" onClick={() => dec(1)}>-1</button>
        </>
    )
}

