import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../redux/authSlice';

const clientId = '281951489765-nggcld40ee0vp6m7k85gjbq3oq58jdrm.apps.googleusercontent.com';

const GoogleLoginBtn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSuccess = (response) => {
        // Google access token is available in response.credential
        const { credential } = response;

        if (credential) {
            // Save the token to localStorage
            localStorage.setItem('googleToken', credential);
            dispatch(setToken(credential));
            navigate('/dashboard');

            // Optionally, you can handle the token here (e.g., send it to your server)
            console.log('Google token:', credential);
        } else {
            console.error('Failed to get Google token');
        }
    }

    const onFailure = (res) => {
        console.log(res, "failed");
    };

    return (
        <div id="signInBtn">
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                buttonText={'Login with Google'}
                isSignedIn={true}
            />
        </div>
    );
};

export default GoogleLoginBtn;
