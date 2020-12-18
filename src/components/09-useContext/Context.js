import React, { useContext } from "react";
import { Logout } from "./Logout";
import { Login } from "./Login";
import { UserContext } from "./UserDataContext";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { About } from "./About";
// import { Login } from "./Login";
// import { NavBarUseContext } from "./NavBarUseContext";

export const Context = () => {
  let { user } = useContext(UserContext);

  return (
    <>
      <h1>CONTEXT</h1>
      <p>
        Using ~useContext~ to keep the user information when he/she logs in.
      </p>
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <Login />
      <Logout />
    </>
  );
};
