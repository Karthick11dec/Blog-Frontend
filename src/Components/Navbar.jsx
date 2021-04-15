import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../css/navbar.css';

const Navbar = () => {
    return (
        <Fragment>
            <nav className='navbar sticky height'>
                <div>
                    <Link to="/home" className="decor">
                        <div className="navbar-brand"><h4 className="blog"><i class="fab fa-blogger icon"></i>  BLOGGER.com</h4></div>
                    </Link>
                </div>
                <div style={{ float: 'right' }} className="pad">
                    <Link to="/signup" className="decor">
                        <span className="navbar-brand margin"><b>Sign up</b></span>
                    </Link>
                    <Link to="/login" className="decor">
                        <span className="navbar-brand margin"><b>Log In</b></span>
                    </Link>
                    <Link to="/contact" className="decor">
                        <span className="navbar-brand margin"><b>Contact</b></span>
                    </Link>
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar;