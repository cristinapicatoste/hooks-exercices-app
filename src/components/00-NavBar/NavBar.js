import React from "react";
import { NavLink } from "react-router-dom";
// import { HOME, COUNTER, COUNTERHOOK, FORM, FORMHOOK, BREAKING, USEREF } from '../../routes/routes';
import * as route from "../../routes/routes";

export const NavBar = () => {
  return (
    <nav>
      <NavLink exact activeClassName="activeNav" to={route.HOME}>
        Home
      </NavLink>
      {/* <NavLink exact activeClassName="activeNav" to={route.COUNTER}>Counter</NavLink> */}
      <NavLink exact activeClassName="activeNav" to={route.COUNTERHOOK}>
        Counter
      </NavLink>
      {/* <NavLink exact activeClassName="activeNav" to={route.FORM}>Form</NavLink> */}
      <NavLink exact activeClassName="activeNav" to={route.FORMHOOK}>
        Form
      </NavLink>
      <NavLink exact activeClassName="activeNav" to={route.BREAKING}>
        Fetch
      </NavLink>
      <NavLink exact activeClassName="activeNav" to={route.USEREFREAL}>
        UseRef
      </NavLink>
      <NavLink exact activeClassName="activeNav" to={route.USELAYOUT}>
        UseLayout
      </NavLink>
      <NavLink exact activeClassName="activeNav" to={route.MEMOS}>
        Memo
      </NavLink>
      {/* <NavLink exact activeClassName="activeNav" to={route.MEMOHOOK}>Memo Hook</NavLink> */}
      {/* <NavLink exact activeClassName="activeNav" to={route.CALLBACKHOOK}>Callback</NavLink> */}
      <NavLink exact activeClassName="activeNav" to={route.PADRE}>
        Challenge
      </NavLink>
      <NavLink exact activeClassName="activeNav" to={route.USEREDUCE}>
        UseReducer
      </NavLink>
    </nav>
  );
};
