import React from "react";
import {NavLink} from 'react-router-dom';


const Header =() => {
  return (
    <div>
      <NavLink to ="/" activeClassName= "is-active" exact={true}>Users</NavLink>
  <NavLink to ="/createuser" activeClassName= "is-active" >CreateUser </NavLink>
  
    </div>
  );
};

export default Header;

