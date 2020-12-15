import React, { useState, useRef } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const ExampleUseRef = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select()
    }

    const [show, setShow] = useState(false);


    return (
        <>
            <h1>Focus / Select with useRef</h1>
            <input placeholder="Name" />
            <button onClick={handleClick}>Focus</button>

            <hr />

            <h1>Real Example useRef</h1>
            {show && <MultipleCustomHooks />}
            <button onClick={() => setShow(!show)}>Show/Hide</button>
        </>
    )
}
