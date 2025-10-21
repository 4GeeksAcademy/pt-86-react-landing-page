import React from "react";

//create your first component
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><strong>Home</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong>About</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><strong>Services</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href = "#"><strong>Contact</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;