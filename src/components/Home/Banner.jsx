import React from 'react'
import { Link } from 'react-router-dom'

import "./Banner.css"

const Banner = () => {
    return (
        <div className='section'>
            <div className="container">
                <div className="banner__container">
                    <div className="banner__content">
                        <h2>Fastest & Secure Platform to Invest in <span>Crypto</span></h2>
                        <p>At Crest Holdings LTD, we believe in democratizing access to the world of Finance and Investment. Join us on our journey to reshape the future of finance.</p>
                        <div>
                            <Link to="/register">
                                <button>Register Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="banner__img">
                        <img src="/images/banner.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner