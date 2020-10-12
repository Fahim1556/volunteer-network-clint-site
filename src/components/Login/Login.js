import React, { useContext } from 'react';
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import {loginContexApi} from '../Main';
firebase.initializeApp(firebaseConfig)

const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }
    
    const [loginUser, setLoginUser] = useContext(loginContexApi) 

    const provider = new firebase.auth.GoogleAuthProvider()
        const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=> {
          const {displayName, email, photoURL} = res.user
            const userData = {
              isSignIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setLoginUser(userData)
            history.replace(from)
        })
      }
    return (
        <div className="container full">
        <div className='container'>
        <div className="row mt-5 d-flex flex-column">
            <img className='d-block mx-auto' src="https://i.ibb.co/GQYn4Tp/logo.png" height='70' alt=""/>


            <div className="col-md-5 mx-auto mt-4 ">
                <div className="card shadow">

                    <div className="card-body text-center ">
                        <h2 className='font'>Login With</h2>

                        <button onClick={handleSignIn} className='btn btn-outline-primary my-4'> <span className=' btnSpan mr-5'><img height='35' src="https://i.ibb.co/9vjdGtz/google.png" alt=""/></span> Sign in With Google</button>
                        <p className='account-part'>Don't Have An Account? <a href='https://accounts.google.com/'>Create an Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Login;