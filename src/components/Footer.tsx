import React, {FC} from 'react';
import '../App.css'

const Footer:FC = () => {
    return (
        <footer className="page-footer footer blue lighten-1">
                <div className="container">
                    &copy; by Fillsen 2021
                    <a className="grey-text text-lighten-4 right" href="/">Project Repo</a>
                </div>
        </footer>
    );
};

export default Footer;
