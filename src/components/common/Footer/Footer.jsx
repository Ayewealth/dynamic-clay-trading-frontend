import React from 'react'
import { Send, Twitter, Mail, AlarmClock } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='small__section footer__bg'>
            <div className="container">
                <div className="footer">
                    <div className="footer__container">
                        <div className='footer__inner'>
                            <h2>Dynamic Clay Trading</h2>
                            <span>Our strong partnerships and relationships across the world are what make DCT the global force for what blockchain complance is today.</span>

                            <div className='community'>
                                <p>Join Our Community</p>
                                <div className='community__inner'>
                                    <div>
                                        <Send />
                                    </div>
                                    <div>
                                        <Twitter />
                                    </div>
                                    <div>
                                        <FaWhatsapp />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='footer__inner'>
                            <h3>QuickLink</h3>

                            <ul>
                                <li>
                                    <a href="#investment">
                                        Investment
                                    </a>
                                </li>
                                <li>
                                    <a href="#service">
                                        Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#live_market">
                                        Live Market
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonial">
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='footer__inner'>
                            <h3>Account</h3>

                            <ul>
                                <li>
                                    <a href="/">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Buy Crypto
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        My Investment
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='footer__inner'>
                            <h3>Get In Touch</h3>

                            <ul>
                                <li>
                                    <Mail />
                                    <p>dynamicclaytrading@gmail.com</p>
                                </li>
                                <li>
                                    <AlarmClock />
                                    <p>Office Hours - 24hrs</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='copyright'>
                        <div />
                        <p>&copy; Dynamic Clay Trading. All rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer