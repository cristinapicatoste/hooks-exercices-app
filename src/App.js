import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HOME, COUNTER, COUNTERHOOK, FORM, FORMHOOK, BREAKING, USEREF } from './routes/routes';
import * as route from './routes/routes';
import { Home } from './pages/Home';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { NavBar } from './components/00-NavBar/NavBar';
import { ExampleUseRef } from './components/04-useRef/ExampleUseRef';
import { useLayout } from './components/05-useLayoutEffect/useLayout';


export const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path={route.HOME} component={Home} />
                    <Route exact path={route.BREAKING} component={MultipleCustomHooks} />
                    <Route exact path={route.FORMHOOK} component={FormCustomHook} />
                    <Route exact path={route.FORM} component={SimpleForm} />
                    <Route exact path={route.COUNTERHOOK} component={CounterCustomHook} />
                    <Route exact path={route.COUNTER} component={CounterApp} />
                    <Route exact path={route.USEREFREAL} component={ExampleUseRef} />
                    <Route exact path={route.USELAYOUT} component={useLayout} />
                </Switch>
            </Router>
        </div>
    )
}
