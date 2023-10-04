import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="left">
                    <Link to={"/"}>
                        <img
                            src="images/website-logo.svg"
                            alt="website logo"
                        />
                        <span>HomeMark</span>
                    </Link>
                </li>

                <li className="middle">
                    <span>home</span>
                    <span>service</span>
                    <span>property</span>
                    <span>contact</span>
                </li>

                <li className="right">
                    <button>sign in</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
