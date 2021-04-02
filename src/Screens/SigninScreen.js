import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import GoogleLogin from 'react-google-login'


export default function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (email && password) {
            Axios
                .post('https://learning-management-project.herokuapp.com/api/users/signin', { email, password })
                .then(res => {
                    localStorage.setItem('userInfo', JSON.stringify(res.profileObj));
                    localStorage.setItem('username', (res.profileObj.name));
                    window.location = '/about'
                })
        } else {
            alert("Enter valid details")
        }
    };

    const responseGoogle = res => {
        localStorage.setItem('userInfo', JSON.stringify(res));
        localStorage.setItem('username', (res.profileObj.name));
        window.location = '/about'
    }

    return (
        <section className='signin center-middle' >
            <div className='signin-card'>
                <div className='row login-signup  '>
                    <Link to="/" className='signin-btn'> <div className='log-sin-div'>LOGIN </div></Link>
                    <Link to="/signup"> <div className='log-sin-div'>SIGNUP  </div></Link>
                </div>
                <span className='center-middle'><h3>Login with your Social Network</h3></span>
                <div className='row login-signup google'>
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
                            <h1>Sign In</h1>
                        </div>
                        <div>
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)} ></input>
                        </div>
                        <div>
                            <label />
                            <button className="main-btn" type="submit"> Sign In </button>
                            <label />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
