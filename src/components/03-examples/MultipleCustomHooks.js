import React from 'react'
import { useFetch } from '../../hook/useFetch'
import { useCounter } from '../../hook/useCounter';

export const MultipleCustomHooks = () => {

    const { counter, inc } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const url = useFetch(`https://www.breakingbadapi.com/api/quotes`);
    console.log(url);

    //el doble negativo !! convierte el null en false.
    //!null = true
    //!true = false
    //!!null = false


    // const { author, quote, quote_id } = !!data && data[0];

    return (
        <div>
            <h1>UseFetch</h1>
            <h3>Breaking Bad Quotes</h3>
            {
                loading
                    ? <div>Loading...</div>
                    : <blockquote>{data && data.length && <>
                        <p>{data[0].quote}</p>
                        <h5>{data[0].author}</h5>
                        <h6>{data[0].quote_id}</h6>
                        <hr /> </>}
                    </blockquote>
            }
            <button onClick={inc}>Next quote</button>
        </div >
    )
}
