import React from "react";

// Importing icon components from Font Awesome for use in social media links.
import { FaBehance, FaDribbble, FaLinkedin, FaMedium } from "react-icons/fa";

// Importing the CSS styling specific to the Footer component.
import './footer.css';

// Defining the Footer functional component.
const Footer = () => {
    return (
        // Main footer element containing all footer content.
        <footer className="footer">

            {/* Footer container for organizing footer items. */}
            <div className="footer__container container">
            
                {/* Social links section in the footer. */}
                <div className="footer__socials">
                
                    {/* LinkedIn link, opens in a new tab, with an icon */}
                    <a href="https://www.linkedin.com/in/suchiradhar/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaLinkedin />
                    </a>

                    {/* Behance link, opens in a new tab, with an icon */}
                    <a href="https://www.behance.net/suchiradhar" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaBehance />
                    </a>

                    {/* Dribbble link, opens in a new tab, with an icon */}
                    <a href="https://dribbble.com/suchira" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaDribbble />
                    </a>

                    {/* Medium link, opens in a new tab, with an icon */}
                    <a href="https://medium.com/@suchira" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <FaMedium />
                    </a>

                </div>

                {/* Copyright notice displaying the year and user name. */}
                <p className="footer__copyright text-cs">
                    &copy; 2024 <span> Suchira</span>. All Rights Reserved.
                </p>

                {/* Developer credit line displaying the user name */}
                <p className="footer__copyright text-cs">
                    Developed by <span> Suchira</span>
                </p>

            </div>

        </footer>
    )
}

export default Footer