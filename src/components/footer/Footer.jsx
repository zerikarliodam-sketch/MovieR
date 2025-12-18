import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    
Netlivy TV — онлайн медиатека и телепередачи для комфортного просмотра в любое время 🌛 и на любом устройстве 📱💻. Смотрите любимые телеканалы, фильмы и передачи в высоком качестве 🔥🎬 с быстрым и стабильным онлайн-доступом ⚡ Почувствуйте бесконечность вместе с нами❤️‍🔥
                </div>
                <div className="socialIcons">
                    <span className="icon fb ">
                        <FaFacebookF />
                    </span>
                    <a href="instagram.com/car1movvvv className="icon insta">
                        <FaInstagram />
                    </a>
                    <span className="icon twitt">
                        <FaTwitter />
                    </span>
                    <span className="icon link">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;