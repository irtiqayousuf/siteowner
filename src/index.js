import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@mui/material';
import App from './App';
import Register from './register';
import Verify from './verify';
import Dashboard from './dashboard';
import theme from "./theme";



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
         <Route exact path="/register" component={Register} />
         <Route exact path="/verify" component={Verify} />
         <Route exact path="/dashboard" component={Dashboard} />
  </Router>
  </ThemeProvider>
);

