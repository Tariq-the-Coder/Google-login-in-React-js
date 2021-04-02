import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Screens/About'
import SigninScreen from './Screens/SigninScreen'
import SignupScreen from './Screens/SignupScreen'

export default function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <Navbar />
                <main>
                    <Route path="/signup" component={SignupScreen}  ></Route>
                    <Route exact path="/" component={SigninScreen}  ></Route>
                    {localStorage.getItem('userInfo') ? <Route path='/about' component={About} /> : <Redirect to="/" />}
                    {/* {localStorage.getItem('userInfo') ? <Redirect to="/about" /> : <Redirect to="/" />} */}
                </main>
                <footer className=" center row"> All right reserved</footer>
            </div>
        </BrowserRouter>
    )
}
