import React, { useState } from 'react';
import { useCounter } from '../../hook/useCounter';
import { Small } from './Small';
import { MemoHook } from './MemoHook';
import { CallbackHook } from './CallbackHook';


export const Memorize = () => {
    const { counter, inc } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Memorize</h1>
            <h3>Counter: <Small value={counter} /></h3>
            <button onClick={inc} className="add">+1</button>
            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
            <hr />
            <MemoHook />
            <hr />
            <CallbackHook />
        </>
    )
}
