import React from 'react'

import "./ActiveUsers.css"

const ActiveUsers = () => {
    return (
        <div className='small__section'>
            <div className="container">
                <div className="activeuser__container">
                    <div className='activeuser'>
                        <h2>198+</h2>
                        <p>Useable Countries</p>
                        <div />
                        <span>We offer our services to over 198+ Countries.</span>
                    </div>

                    <div className='activeuser'>
                        <h2>20 million+</h2>
                        <p>Users</p>
                        <div />
                        <span>We have helped over 20 million user grow their wealth.</span>
                    </div>

                    <div className='activeuser'>
                        <h2>$350,000+</h2>
                        <p>Profit of Dollar</p>
                        <div />
                        <span>We have been able to raise over $350,000 in profit from Dynamic Clay Trading.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveUsers