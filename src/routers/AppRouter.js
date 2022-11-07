import React from 'react'
import {BrowserRouter, Switch, Route } from 
"react-router-dom";
import CreateUser from "../component/createuser";
import Users from "../component/users";
import Header from '../component/header';

//here below we are using Approuter as a function component instead of class component
const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
    <Header></Header>
    <Switch>
      <Route exact path ="/" component={ Users}/>
      <Route path ="/createuser" component ={CreateUser}/>

    </Switch>
    </div>
    </BrowserRouter>
  );
};

export default AppRouter;
//the browser router wraps all your components while the routes list out the components, 
