import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import img from '../../images/login/login.jpg';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="mt-5">
            <h2>Please Login</h2>
            <img width="400px" src={img} alt="" /> <br />
            <button onClick={handleGoogleSignIn} className="btn btn-primary text-white fw-bold">Google Sign In</button>
        </div>
    );
};

export default Login;