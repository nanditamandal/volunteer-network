import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();
    
   
    const [logInUser, setLogInUser]= useContext(UserContext);
    let { from } = location.state || { from: { pathname: "/" } };

    const handelLogin=()=>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            
            var token = result.credential.accessToken;
         
            var user = result.user;
            const newUser ={
                name: user.displayName,
                email: user.email,
                active: true
            }
            setLogInUser(newUser);
            saveAuthToken();
           // history.replace(from);
          
          }).catch(function(error) {
      
            var errorCode = error.code;
            var errorMessage = error.message;
    
            var email = error.email;
     
            var credential = error.credential;
            console.log(errorMessage)
    
          });

    }
    const saveAuthToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
            console.log(idToken);
            
          })
          .catch(function(error) {
           
          });

    }
    console.log(logInUser)
    return (
        <div className="container d-flex flex-column justify-content-center" style={{minHeight: '100vh',background: '#E5E5E5'}}>
            <div className="header">
                <img src="https://i.ibb.co/nspf4Kr/Group-1329.png" alt="Group-1329" border="0"></img>
            </div>
            <div className="login">
            <h3>Log In With</h3>
            <button type="button" className="btn btn-outline-dark" onClick={handelLogin}><img src="https://i.ibb.co/bQZmC5Q/google.png" alt="google" border="0" />Continue with google</button>
            <p>Don't have any Account ? <Link to='/register'>create an account</Link></p>
            </div>
    

        </div>

            
    );
};

export default Login;