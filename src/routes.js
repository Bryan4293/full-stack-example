import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from "./components/Auth/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/shop/Dashboard";

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
    </Switch>
)