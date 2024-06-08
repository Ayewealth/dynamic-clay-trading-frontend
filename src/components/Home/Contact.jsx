import React from 'react'
import { Send, Twitter } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


import "./Contact.css"

const Contact = () => {
    return (
        <div className='small__section'>
            <div className="container">
                <div className="contact__container">
                    <div className="contact__left">
                        <h3>Social Network</h3>
                        <h2>Meet the Worldwide <span>Community.</span></h2>
                        <p>Join our global network and experience top-notch service and support. Contact us today to connect and grow with a thriving community!</p>
                    </div>
                    <div className="contact__right">
                        <div className='contact__right-inner'>
                            <div className='contact__right-inner-left'>
                                <Send />
                            </div>
                            <div className='contact__right-inner-right'>
                                <p>Telegram Chat</p>
                                <span>
                                    Connect with us on Telegram for instant updates and support!</span>
                            </div>
                        </div>

                        <div className='contact__right-inner'>
                            <div className='contact__right-inner-left'>
                                <Twitter />
                            </div>
                            <div className='contact__right-inner-right'>
                                <p>Twitter Chat</p>
                                <span>Follow us on Twitter for the latest news and updates!</span>
                            </div>
                        </div>

                        <div className='contact__right-inner'>
                            <div className='contact__right-inner-left'>
                                <FaWhatsapp />
                            </div>
                            <div className='contact__right-inner-right'>
                                <p>Whatsapp Chat</p>
                                <span>Join our WhatsApp group for real-time support and updates!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact