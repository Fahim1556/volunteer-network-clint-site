
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {loginContexApi} from '../Main';

const Navbar = () => {
    const [loginUser, setLoginUser] = useContext(loginContexApi)
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top">
            <Link className="navbar-brand" to="/">
                <img height='60' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto font-weight-bolder">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  ml-3 text-dark" to="/donation">Donation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-3 text-dark" to="/tasks">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-3 text-dark" to="/blog">Blog</Link>
                    </li>
                    {loginUser.isSignIn? 
                    <li className="nav-item">
                        <Link onClick={()=>setLoginUser({})} className="nav-link ml-5 btn btn-warning px-4" to="/">Logout</Link>
                    </li>
                    :
                    <li className="nav-item">
                        <Link className="nav-link ml-5 btn btn-primary px-3" to="/login">Register</Link>
                    </li>
                    }
                    <li className="nav-item">
                        <Link className="nav-link ml-2 btn btn-dark px-4" to="/admin">Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;