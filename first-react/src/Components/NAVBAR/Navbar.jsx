import React from "react";
import logo from "../../Assets/logo.png";
import { BiSearch } from "react-icons/bi";
import "./navbar.css";
import Data from "../Data";

const Navbar = () => {

    const Nav = [
        {
            image: logo,
            text: 'hello',
            icon: <BiSearch style={{marginTop: "2rem"}}/>
        },
    ]

    return (
        <div className="container">
            {Nav.map((value, index) => {
                return <Data key={index} {...value}/>
            })}
        </div>
    )
}

export default Navbar;