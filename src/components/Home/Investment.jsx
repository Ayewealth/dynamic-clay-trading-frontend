import React from 'react'
import { CircleCheck } from 'lucide-react';

import "./Investment.css"

const Investment = () => {
    return (
        <div className='small__section' id='investment'>
            <div className="container">
                <div className="investment__container">
                    <div className="investment__head">
                        <h3>Our Investment Plans</h3>
                        <p>To Ensure A Successful <span>Investment</span> , It's Crucial To Thoroughly Understand The Place Where You're Putting Your <span>Money</span>. Find A Strategy That Aligns Best With Your Goals And Preferences.</p>
                    </div>
                    <div className="investment__content">
                        <div className='investment'>
                            <div className='investment__top'>
                                <p>Basic Plan</p>
                                <h3>10%</h3>
                                <p>30 Days</p>
                            </div>
                            <div className='investment__design' />
                            <div className='investment__middle'>
                                <p>Features</p>
                                <ul>
                                    <li>
                                        <CircleCheck />
                                        Basic Level Security
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Minimum Investment-$500
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Maximum Investment-$1,500
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Instant Withdrawal
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        24/7 Support
                                    </li>
                                </ul>
                            </div>
                            <div className='investment__bottom'>
                                <button>Invest</button>
                            </div>
                        </div>

                        <div className='investment'>
                            <div className='investment__top'>
                                <p>Regular Plan</p>
                                <h3>20%</h3>
                                <p>30 Days</p>
                            </div>
                            <div className='investment__design' />
                            <div className='investment__middle'>
                                <p>Features</p>
                                <ul>
                                    <li>
                                        <CircleCheck />
                                        Regular Level Security
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Minimum Investment-$1,500
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Maximum Investment-$5,000
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Instant Withdrawal
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        24/7 Support
                                    </li>
                                </ul>
                            </div>
                            <div className='investment__bottom'>
                                <button>Invest</button>
                            </div>
                        </div>

                        <div className='investment'>
                            <div className='investment__top'>
                                <p>Standard Plan</p>
                                <h3>30%</h3>
                                <p>30 Days</p>
                            </div>
                            <div className='investment__design' />
                            <div className='investment__middle'>
                                <p>Features</p>
                                <ul>
                                    <li>
                                        <CircleCheck />
                                        Standard Level Security
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Minimum Investment-$5,000
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Maximum Investment-$10,000
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Instant Withdrawal
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        24/7 Support
                                    </li>
                                </ul>
                            </div>
                            <div className='investment__bottom'>
                                <button>Invest</button>
                            </div>
                        </div>

                        <div className='investment'>
                            <div className='investment__top'>
                                <p>Premium Plan</p>
                                <h3>50%</h3>
                                <p>30 Days</p>
                            </div>
                            <div className='investment__design' />
                            <div className='investment__middle'>
                                <p>Features</p>
                                <ul>
                                    <li>
                                        <CircleCheck />
                                        Premium Level Security
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Minimum Investment-$10,000
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Maximum Investment-$50,000
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        Instant Withdrawal
                                    </li>
                                    <li>
                                        <CircleCheck />
                                        24/7 Support
                                    </li>
                                </ul>
                            </div>
                            <div className='investment__bottom'>
                                <button>Invest</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investment