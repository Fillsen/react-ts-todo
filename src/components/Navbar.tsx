import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-1 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todo's</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
