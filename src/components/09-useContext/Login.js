import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";

export const Login = () => {
  const { setUser } = useContext(UserContext);

  const handleSetUser = () => {
    setUser({
      id: 123456789,
      name: "Cristina",
      email: "cp@gmail.com",
    });
  };

  return (
    <button onClick={handleSetUser}>Login</button>
    // <div>
    //   <h3>LOGIN</h3>
    //   <button onClick={handleSetUser}>Login</button>
    // </div>
  );
};
