import React, { useState } from 'react'
import { UserCheck, Mail, Key } from 'lucide-react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import "../components/Auth/Auth.css"
import { Link } from 'react-router-dom';

const Register = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showpassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <div className='auth'>
            <div className="register__container">
                <h2>Create an Account</h2>

                <form action="" className='form'>
                    <div className='input__fields'>
                        <label>FullName</label>
                        <div>
                            <UserCheck />
                            <input type="text" placeholder='Enter FullName' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        </div>
                    </div>
                    <div className='input__fields'>
                        <label>Your Email</label>
                        <div>
                            <Mail />
                            <input type="email" placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className='input__fields'>
                        <label>Password</label>
                        <div>
                            <Key />
                            <input type={showpassword ? "text" : "password"} placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            {showpassword ? (<VscEye onClick={handleShowPassword} />) : (<VscEyeClosed onClick={handleShowPassword} />)}

                        </div>
                    </div>
                    <button>Register</button>
                </form>
                <p className='auth__switch'>Already have an account? <Link to="/login">Login</Link></p>
                <p className='auth__copyright'>© Copyright 2023   ECM   All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Register