import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import GoogleLogin from 'react-google-login'

export default function SignupScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            Axios
                .post(`https://learning-management-project.herokuapp.com/api/users/register`, {
                    name,
                    email,
                    password,
                })
                .then(res => {
                    localStorage.setItem('userInfo', JSON.stringify(res.data));
                    localStorage.setItem('username', (res.data.name));
                    window.location = '/about'
                })
        } else {
            alert('Password and confirm password are not match');
        }
    };

    const responseGoogle = res => {
        const data = (res)
        const name = (res.profileObj.name)
        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('username', (name));
        window.location = '/about'
    }
    return (
        <section className='signin center-middle' >
            <div className='signin-card'>
                <div className='row login-signup  '>
                    <Link to="/"> <div className='log-sin-div'>LOGIN </div></Link>
                    <Link to="/signup" className='signup-btn'> <div className='log-sin-div'>SIGNUP  </div></Link>
                </div>
                <span className='center-middle'><h3>Signup with your Social Network</h3></span>
                <div className='row login-signup google '>
                    <GoogleLogin
                        clientId="357315468633-ok8sr5arr8522bn8667smf6m7qkd67k7.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}><div><img src="https://img.icons8.com/color/24/000000/google-logo.png" alt='' /></div></button>
                        )}
                        buttonText=""
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <GoogleLogin
                        clientId="357315468633-ok8sr5arr8522bn8667smf6m7qkd67k7.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}><div><img src="https://img.icons8.com/color/24/000000/facebook.png" alt='' /></div></button>
                        )}
                        buttonText=""
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div>
                    <form className="form" name='form' onSubmit={submitHandler}>
                        <div>
                            <h1>Create Account</h1>
                        </div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter name" required onChange={(e) => setName(e.target.value)} ></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" autoComplete='off' placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" autoComplete='off' placeholder="Enter confirm password" required onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                        </div>
                        <div>
                            <label />
                            <button className="main-btn" type="submit"> Register </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
