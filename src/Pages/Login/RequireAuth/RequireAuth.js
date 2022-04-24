import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, hookError] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading || sending) {
        <p>Loading...</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    console.log(user);
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='w-75 border py-5 my-5 bg-light shadow-sm rounded mx-auto text-center'>
            <h2 className='text-danger'>Your email is not verified!!!</h2>
            <h4> Please verify your email address
            </h4>
            <button onClick={
                async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }} className="btn btn-success">Send verification email</button>
        </div>
    }
    return children;
};

export default RequireAuth;