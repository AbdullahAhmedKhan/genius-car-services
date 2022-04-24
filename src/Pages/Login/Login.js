import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import SocialLogin from './SocialLogin';
const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    if (loading || sending) {
        return <p>Loading...</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }
    return (

        <div>
            <div className='svg'>
                <div className='p-1 text-light mx-auto d-flex flex-align-baseline'>
                    <div className='p-5 rounded mx-auto w-75'>
                        <h1>Genius Car Center</h1>
                        <p className='w-50'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, et obcaecati. Vero nemo delectus quaerat alias, quis voluptates a. Excepturi tenetur qui expedita, dolore consequuntur distinctio. Molestias quo explicabo eos.
                            <p className='text-warning'>-Abdullah Ahammed Khan</p></p>
                        <button className='btn btn-light'>Learn More</button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,128C384,149,480,235,576,256C672,277,768,235,864,197.3C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            </div>

            <div className='container mb-5'>
                <h1 className='text-center text-primary p-5'>Please Login</h1>
                <div className='container p-5 w-75 mx-auto'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='w-100 ' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    <p className='my-2 text-center'>Forget Password?  <span style={{ cursor: "pointer" }} onClick={resetPassword} className="
                text-danger px-2">Reset Password</span></p>
                    <p className='my-2 text-center'>New to Genius Car?  <span style={{ cursor: "pointer" }} onClick={navigateRegister} className="
                text-success px-2">Please Register</span></p>
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </div>
    );
};

export default Login;