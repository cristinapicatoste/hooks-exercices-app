import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hook/useFetch'
import { useCounter } from '../../hook/useCounter';

export const useLayout = () => {

    const { counter, inc } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    // if (counter >= 31 || counter <= 62) {
    //     useCounter(63)
    // } if (counter > 102) {
    //     useCounter(1)
    // }

    useLayoutEffect(() => {
        return () => {
            setBoxSize(pTag.current.getBoundingClientRect());
        };
    }, [quote]);

    return (
        <div>
            <h1>Use Layout Effect</h1>
            <h3>Breaking Bad Quotes</h3>

            <blockquote>
                <p ref={pTag}><em>{quote}</em></p>
                <hr />
                {/* {data && data.length &&
                    <>
                        <p ref={pTag}>{quote}</p>
                        <hr />
                    </>
                } */}
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button onClick={inc}>Next quote</button>
        </div >
    )
} 
