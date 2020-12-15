import React, { memo } from 'react';

export const Small = React.memo(({ value }) => {

    console.log("soy un memo SMALL");
    return (
        <>
            <small>{value}</small>
        </>
    )
});
