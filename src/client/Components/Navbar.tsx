import React from 'react';
import { Link } from "react-router-dom";
import '../scss/app.scss';







const Navbar: React.FC<INavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg justify-content-between header">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="logo-image">
                        <img src="https://imgur.com/wkflhaN.png" className="img-fluid" />
                    </div>
                </a>
                {/* <Link to="/" className="navbar-brand">ZooTube</Link> */}
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link header" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link header" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link header" to="/streams/organizations">Organizations</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link header" to="/X">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link header" to="/X">Sign up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

interface INavbarProps { }

export default Navbar