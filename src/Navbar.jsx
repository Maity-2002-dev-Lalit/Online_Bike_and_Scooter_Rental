import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-box">
            <div className="images">
                <img
                    src="https://png.pngtree.com/png-clipart/20230807/original/pngtree-vector-illustration-of-a-motorcycle-logo-available-for-rental-on-a-white-background-vector-picture-image_10130370.png"
                    alt="Error"
                    width={80}
                />
            </div>
            <div className="d-flex flex-row mb-3 justify-content-center align-items-center" id='gap'>
                <NavLink className={(e) => e.isActive ? "green" : "red"} to="/home" id='link'>Home</NavLink>
                <NavLink className={(e) => e.isActive ? "green" : "red"} to="/aboutus" id='link'>About us</NavLink>
                <NavLink className={(e) => e.isActive ? "green" : "red"} to="/blogs" id='link'>Blogs</NavLink>
                <NavLink className={(e) => e.isActive ? "green" : "red"} to="/subscription" id='link'>
                    <button type="button" className="btn btn-outline-primary btn-sm border border-primary" id='buttonbox'>Subscription</button>
                </NavLink>
            </div>
            <NavLink className={(e) => e.isActive ? "green" : "red"} to="/signin" id='link'><div className="d-flex justify-content-end align-items-center">
                <button type="button" className="btn btn-info border rounded-pill" id='button'>Sign in</button>
            </div></NavLink>
        </div>
    );
};

export default Navbar;

