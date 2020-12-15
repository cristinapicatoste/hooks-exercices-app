import React, { useState } from 'react'

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
        counter6: 60,
    })

    const sumar = () => {
        setCounter({
            ...counter,
            counter1: counter.counter1 + 1,
        })
    }
    return (
        <>
            <h1>Counter 1 {counter.counter1}</h1>
            <h1>Counter 2 {counter.counter2}</h1>
            <button onClick={sumar}>+1</button>
        </>
    )
}
