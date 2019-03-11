import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div>
      <Navbar/>
      
      <Route path="/login" component={Login}/>
      <Route path="/signup"  component={Signup} />

    </div>
      </BrowserRouter>
    );
  }
}

export default App;
