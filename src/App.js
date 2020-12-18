import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HOME, COUNTER, COUNTERHOOK, FORM, FORMHOOK, BREAKING, USEREF } from './routes/routes';
import * as route from "./routes/routes";
import { Home } from "./pages/Home";
import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
import { FormCustomHook } from "./components/02-useEffect/FormCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import { CounterApp } from "./components/01-useState/CounterApp";
import { CounterCustomHook } from "./components/01-useState/CounterCustomHook";
import { NavBar } from "./components/00-NavBar/NavBar";
import { ExampleUseRef } from "./components/04-useRef/ExampleUseRef";
import { useLayout } from "./components/05-useLayoutEffect/useLayout";
import { Memorize } from "./components/06-memos/Memorize";
import { MemoHook } from "./components/06-memos/MemoHook";
import { CallbackHook } from "./components/06-memos/CallbackHook";
import { Padre } from "./components/07-tarea-memo/Padre";
// import { introReducer } from './components/08-useReducer/introReducer';
import { TodoApp } from "./components/08-useReducer/TodoApp";
import { Context } from "./components/09-useContext/Context";
// import { Logout } from "./components/09-useContext/Logout";
// import { Login } from "./components/09-useContext/Login";
import { UserContext } from "./components/09-useContext/UserDataContext";
import { CustomHooks } from "./components/03-examples/CustomHooks";

export const App = () => {
  // const user = {
  //   id: 123456789,
  //   name: "Cristina",
  //   email: "cp@gmail.com",
  // };

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={route.HOME} component={Home} />
          <Route exact path={route.CUSTOMHOOKS} component={CustomHooks} />
          <Route exact path={route.BREAKING} component={MultipleCustomHooks} />
          <Route exact path={route.FORMHOOK} component={FormCustomHook} />
          <Route exact path={route.FORM} component={SimpleForm} />
          <Route exact path={route.COUNTERHOOK} component={CounterCustomHook} />
          <Route exact path={route.COUNTER} component={CounterApp} />
          <Route exact path={route.USEREFREAL} component={ExampleUseRef} />
          <Route exact path={route.USELAYOUT} component={useLayout} />
          <Route exact path={route.MEMOS} component={Memorize} />
          <Route exact path={route.MEMOHOOK} component={MemoHook} />
          <Route exact path={route.CALLBACKHOOK} component={CallbackHook} />
          <Route exact path={route.PADRE} component={Padre} />
          <Route exact path={route.USEREDUCE} component={TodoApp} />
          <Route exact path={route.USECONTEXT} component={Context} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
