import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hook/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {
    const { counter, inc } = useCounter(500);
    const [show, setShow] = useState(true);

    const procesoPesadoMemo = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <>
            <h1>Memo Hook</h1>
            <h3>Counter:<small>{counter}</small></h3>
            <p>{procesoPesadoMemo}</p>
            <button onClick={inc} className="add">+1</button>
            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
