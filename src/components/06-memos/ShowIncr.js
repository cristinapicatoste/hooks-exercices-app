import React from 'react'

export const ShowIncr = React.memo(({ increment }) => {

    console.log('Generated again');

    return (
        <button onClick={() => increment(5)}>
            Increment
        </button>
    )
})
