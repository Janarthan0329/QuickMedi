import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo - QuickMedi.png";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false); // Hide on scroll down
        } else {
            setIsVisible(true); // Show on scroll up
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return (
        <nav className={`navbar fixed top-0 w-full transition-all duration-300 ${isVisible ? "bg-white bg-opacity-80 shadow-md" : "-translate-y-full"}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">

                {/* Logo & Brand */}
                <div className="logo-container">
                    <img src={logo} alt="QuickMedi Logo" className="logo-img" />
                    <h1 className="brand-name">QuickMedi</h1>
                </div>


                {/* Navigation Links */}
                <ul className="flex gap-8 text-gray-700 font-medium">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">Services</li>
                    <li className="hover:text-blue-500 cursor-pointer">Doctors</li>
                    <li className="hover:text-blue-500 cursor-pointer">About</li>
                    <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                </ul>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button className="px-5 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 transition">Login</button>
                    <button className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">Sign Up</button>
                </div>

            </div>
        </nav>
    );
};



export default Navbar;
