import React, { useContext } from "react";
import { UserContext } from "./UserDataContext";

export const Logout = () => {
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  return (
    <button onClick={handleClick} className="blue">
      Logout
    </button>

    // <div>
    //   <h3>LOGOUT</h3>
    //   <button onClick={handleClick} className="blue">
    //     Logout
    //   </button>
    // </div>
  );
};
