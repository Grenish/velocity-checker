import React from "react";
import { rocket } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header className="">
            <nav className="">
                <div className="">
                    <img src={rocket} className="" alt="Rocket icon" />
                    <span className="">VelocityChecker</span>
                </div>
                <div className="">
                    <ul>
                        <li>
                            <Link to="/about">
                              About Us  
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/privacy">
                                Privacy Policy
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;