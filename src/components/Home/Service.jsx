import React from 'react'
import { ShieldCheck } from 'lucide-react';
import { CandlestickChart } from 'lucide-react';
import { Bitcoin } from 'lucide-react';
import { UsersRound } from 'lucide-react';

import "./Service.css"
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <div className='small__section' id='service'>
            <div className="container">
                <div className="service__container">
                    <div className="service__left">
                        <div className="service__left-inner">
                            <div className='secure_d'>
                                <ShieldCheck />
                            </div>
                            <p>Secure & Insured</p>
                            <span>Your investments are protected with advanced security measures and comprehensive insurance coverage.</span>
                        </div>
                        <div className="service__left-inner">
                            <div className='secure_p'>
                                <CandlestickChart />
                            </div>
                            <p>Trading Best Prices</p>
                            <span>Benefit from competitive rates and optimal pricing for all your trades.</span>
                        </div>
                        <div className="service__left-inner">
                            <div className='secure_b'>
                                <Bitcoin />
                            </div>
                            <p>Buy & Invest Crypto</p>
                            <span>Seamlessly purchase and grow your crypto portfolio with ease.</span>
                        </div>
                        <div className="service__left-inner">
                            <div className='secure_c'>
                                <UsersRound />
                            </div>
                            <p>Outstanding Customer Care</p>
                            <span>Experience dedicated support from our expert customer service team.</span>
                        </div>
                    </div>
                    <div className="service__right">
                        <h3>Our Service</h3>
                        <h2>Make Your <span>Investment</span> Work Easier For You.</h2>
                        <p>Build a stable income flow with our crypto trading platform. Simply invest, and we'll handle the trading for you. Watch your investments grow with expert management and minimal effort.</p>
                        <div>
                            <Link to="/register">
                                <button>Register Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service