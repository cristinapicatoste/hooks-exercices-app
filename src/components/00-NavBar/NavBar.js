import React from 'react';
import { Link } from "react-router-dom";
// import { HOME, COUNTER, COUNTERHOOK, FORM, FORMHOOK, BREAKING, USEREF } from '../../routes/routes';
import * as route from '../../routes/routes';

export const NavBar = () => {
    return (
        <nav>
            <Link to={route.HOME}>Home</Link>
            {/* <Link to={route.COUNTER}>Counter</Link> */}
            <Link to={route.COUNTERHOOK}>Counter Hook</Link>
            {/* <Link to={route.FORM}>Form</Link> */}
            <Link to={route.FORMHOOK}>Form Hook</Link>
            <Link to={route.BREAKING}>Fetch Hook</Link>
            <Link to={route.USEREFREAL}>UseRef Hook</Link>
            <Link to={route.USELAYOUT}>UseLayout Hook</Link>
        </nav>
    )
}

