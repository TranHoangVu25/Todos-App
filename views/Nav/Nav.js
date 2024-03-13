import React from "react";
import './Nav.scss';
import {
  BrowserRouter,
  Link,NavLink 
} from "react-router-dom";

class Nav extends React.Component{

 
  refreshPage=(event)=>{
    // setTimeout(()=>{
    //   window.location.reload(); 
    // }, 1000);
   window.location.reload() 
}
  
    render(){
      
        return(
<div className="topnav">
  <a href="/">Home</a>
  <a href="/todo">Todos</a>
   <a href="/about">About</a>
   <a href='/user'>ListUser</a>
   {/*
<NavLink   to="/" activeClassName="active" exact={true}  >Home
</NavLink>
<NavLink to="/todo" activeClassName="active" >Todos
</NavLink>
<NavLink to="/about" activeClassName="active" >About
</NavLink> */}
</div>        )
    }
}
export default Nav;