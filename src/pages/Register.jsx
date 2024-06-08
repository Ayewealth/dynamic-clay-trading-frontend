import React, { useContext, useState } from 'react'
import { UserCheck, Mail, Key } from 'lucide-react';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import "../components/Auth/Auth.css"
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Alert, CircularProgress } from '@mui/material';

const Register = () => {
    const [showpassword, setShowPassword] = useState(false)

    const { fullname, setFullname, email, setEmail, password, setPassword, loading, registerUser, setShowAlert, showAlert, alertMessage, alertSeverity, } = useContext(AuthContext)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <div className='auth'>
            {showAlert && (
                <Alert
                    severity={alertSeverity}
                    onClose={() => setShowAlert(false)}
                    style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                >
                    {alertMessage}
                </Alert>
            )}
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
                    <button onClick={registerUser}>
                        {loading ? (
                            <CircularProgress color="inherit" size="20px" />
                        ) : "Register"}
                    </button>
                </form>
                <p className='auth__switch'>Already have an account? <Link to="/login">Login</Link></p>
                <p className='auth__copyright'>© Copyright 2023   ECM   All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Register