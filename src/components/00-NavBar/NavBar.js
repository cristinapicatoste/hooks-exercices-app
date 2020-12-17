import React from 'react';
import { Link } from "react-router-dom";
// import { HOME, COUNTER, COUNTERHOOK, FORM, FORMHOOK, BREAKING, USEREF } from '../../routes/routes';
import * as route from '../../routes/routes';

export const NavBar = () => {
    return (
        <nav>
            <Link to={route.HOME}>Home</Link>
            {/* <Link to={route.COUNTER}>Counter</Link> */}
            <Link to={route.COUNTERHOOK}>Counter</Link>
            {/* <Link to={route.FORM}>Form</Link> */}
            <Link to={route.FORMHOOK}>Form</Link>
            <Link to={route.BREAKING}>Fetch</Link>
            <Link to={route.USEREFREAL}>UseRef</Link>
            <Link to={route.USELAYOUT}>UseLayout</Link>
            <Link to={route.MEMOS}>Memo</Link>
            {/* <Link to={route.MEMOHOOK}>Memo Hook</Link> */}
            {/* <Link to={route.CALLBACKHOOK}>Callback</Link> */}
            <Link to={route.PADRE}>Challenge</Link>
            <Link to={route.USEREDUCE}>UseReducer</Link>
        </nav>
    )
}

