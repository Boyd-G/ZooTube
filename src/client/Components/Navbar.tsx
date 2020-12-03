import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className="container">
                <Link to="/" className="navbar-brand">ZooTube</Link>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        //CHANGE X TO ROUTES ON EACH LINK
                        <Link className="nav-link" to="/X">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/X">Organizations</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/X">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/X">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

interface INavbarProps { }

export default Navbar