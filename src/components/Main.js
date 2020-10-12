import React, { createContext, useState } from 'react';
import Home from './Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
  } from "react-router-dom"

import Login from './Login/Login';
import Register from './Register/Register';
import EvenTask from './EventTask/EvenTask';
import Admin from './Admin/Admin';
import AdminEvent from './Admin/AdminEvent';
import PrivateRoute from './PrivateRoute/PrivateRoute';

 export const loginContexApi =createContext()
const Main = () => {
   const [loginUser, setLoginUser] = useState ({isSignIn:false, name: '',email: '',photo: ''})

    return (
        <loginContexApi.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>

              <Route path='/login'>
                <Login></Login>
              </Route>

              <PrivateRoute path='/resister/:key'>
                <Register></Register>
              </PrivateRoute>


              <PrivateRoute path='/tasks'>
                <EvenTask></EvenTask>
              </PrivateRoute>

              <Route path='/admin'>
                <Admin></Admin>
              </Route>

              <Route path='/adminEvent'>
                <AdminEvent></AdminEvent>
              </Route>

              <Route path='*'>
                <Redirect to="/" />
              </Route>
          </Switch>
      </Router>
        
        </loginContexApi.Provider>
       
    );
};

export default Main;