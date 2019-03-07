import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';



const NavBarLink = ({to,label})=>(
  <li className="nav-item">
          <NavLink  to={to} activeClassName='active' className="nav-link" >{label}</NavLink>
        </li>
)


class Navbar extends Component {

  
  render() {
    return (
<div className="App">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" >React JS</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
       

       

      <NavBarLink to="/login" label="Login"/>
      <NavBarLink to="/signup" label="Sign up"/>

     
   
        
      </ul>
  
    </div>
  </nav>
</div>






      
      
    );
  }
}

export default Navbar;
