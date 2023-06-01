import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@mui/material';
import App from './App';
import Verify from './verify';
import Dashboard from './dashboard';
import theme from "./theme";
import Login from './login';
import LoginPhone from './loginphone';
import LoginEmail from './loginemail';
import VerifyEmail from './verifyemail';



const checkLogin = () => {
  console.log("checking")
  if(!localStorage.getItem("user")){
    return false;
  }else{
      return true;
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <Router>
      
         <Route exact path="/" component={App} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/verify" component={Verify} />
         <Route exact path="/verifyemail" component={VerifyEmail} />
         <Route exact path="/dashboard" component={Dashboard} />
         <Route exact path="/login-phone" component={LoginPhone} />
         <Route exact path="/login-email" component={LoginEmail} />

  </Router>
  </ThemeProvider>
);

