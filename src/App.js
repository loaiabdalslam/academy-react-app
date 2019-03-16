import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {toast} from 'react-toastify';

import Navbar from './components/layouts/Navbar';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';
import { PrivateRoute } from './router-utils/PrivateRoute';
import MyProfile from './components/routes/MyProfile';


class App extends Component {
  render() {
    return (
    <BrowserRouter>

    <div>
      <Navbar/>
      
      <Route path="/login" component={Login}/>
      <Route path="/signup"  component={Signup} />
      <PrivateRoute authed={false} path="/profile" component={MyProfile} />
      <ToastContainer/>

    </div>
      </BrowserRouter>
    );
  }
}

export default App;
