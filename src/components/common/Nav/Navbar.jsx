import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleX } from 'lucide-react';
import { AlignLeft } from 'lucide-react';

import "./Nav.css"

const Navbar = () => {
    const [isScrollHeader, setIsScrollHeader] = useState(false);
    const [removeMenu, setShowMenu] = useState('remove-menu')

    const handleScrollHeader = () => {
        if (window.scrollY >= 80) {
            setIsScrollHeader(true);
        } else {
            setIsScrollHeader(false);
        }
    };

    const toggleRemoveMenu = () => {
        setShowMenu((curr) => (curr === "nav__menu" && "remove-menu"))
    }
    const toggleShowMenu = () => {
        setShowMenu((curr) => (curr === "remove-menu" && "nav__menu"))
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
        return () => {
            window.removeEventListener('scroll', handleScrollHeader);
        };
    }, []);

    return (
        <div className={`header ${isScrollHeader ? 'scroll-header' : ''}`}>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        <AlignLeft className='nav__open' onClick={toggleShowMenu} />
                        <Link to="/">
                            <h3>DCT</h3>
                        </Link>
                    </div>
                    <div className={`nav__menu ${removeMenu}`}>
                        <CircleX className='nav__close' onClick={toggleRemoveMenu} />
                        <ul>
                            <li>
                                <a href='#service'>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href='#investment'>
                                    Investment
                                </a>
                            </li>
                            <li>
                                <a href='#testimonial'>
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__auth">
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar