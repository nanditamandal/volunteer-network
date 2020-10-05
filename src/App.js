import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

import './App.css';
import Admin from './Component/Admin/Admin';
import Event from './Component/Event/Event';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NotMatch from './Component/NotMatch/NotMatch';

export const UserContext = createContext();

function App() {
  
  const  [logInUser, setLogInUser] = useState({
    name: '',
    email:'',
    active: false
});
  return (
    <UserContext.Provider value = { [logInUser, setLogInUser]}>
      <Router>

        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
      
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/events">
            <Event></Event>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/register/:id">
            <Register></Register>
          </PrivateRoute>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        
         
         
         
        </Switch>
      
    </Router>
    </UserContext.Provider >
      
  
  );
}

export default App;
