import React from "react";
import { FaBehance, FaDribbble, FaLinkedin, FaMedium } from "react-icons/fa";

import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
            <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/suchiradhar/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.behance.net/suchiradhar" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <FaBehance />
                        </a>

                        <a href="https://dribbble.com/suchira" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <FaDribbble />
                        </a>

                        <a href="https://medium.com/@suchira" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <FaMedium />
                        </a>
                    </div>

                    <p className="footer__copyright text-cs">&copy; 2024 
                    <span> Suchira</span>. All Rights Reserved.</p>

                    <p className="footer__copyright text-cs">Developed by 
                    <span> Suchira</span></p>

            </div>
        </footer>
    )
}

export default Footer