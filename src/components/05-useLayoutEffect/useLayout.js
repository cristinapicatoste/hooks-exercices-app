import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hook/useFetch'
import { useCounter } from '../../hook/useCounter';

export const useLayout = () => {

    const { counter, inc } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const pTag = useRef();

    useLayoutEffect(() => {
        return () => {
            console.log(pTag.current.getBoundingClientRect());
        };
    }, []);

    return (
        <div>
            <h1>Use Layout Effect</h1>
            <h3>Breaking Bad Quotes</h3>

            <blockquote>
                {data && data.length &&
                    <>
                        {/* <p>{data[0].quote}</p> */}
                        <p ref={pTag}>{data[0].quote}</p>
                        <hr />
                    </>
                }
            </blockquote>

            <button onClick={inc}>Next quote</button>
        </div >
    )
} 
