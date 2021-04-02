import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const username = localStorage.getItem('username')

    const signoutHandler = () => {
        localStorage.clear()
        window.location = '/'
    };
    return (
        <header className='row' >
            <span>
                <Link className="brand" to="/">Welcome</Link>
            </span>
            <span>
                {username ? (
                    <>
                        <NavLink to="/about" >About</NavLink>
                        <div className="dropdown">
                            <Link to="#">
                                {username} <i className="fa fa-caret-down"></i>{' '}
                            </Link>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/" onClick={signoutHandler}>
                                        Sign Out
                                     </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link to="/">Sign In</Link>
                )}
            </span>
        </header>
    )
}
