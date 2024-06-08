import { Key, Mail, UserCheck } from 'lucide-react'
import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showpassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }
    return (
        <div className='auth'>
            <div className="register__container">
                <h2>User Login</h2>

                <form action="" className='form'>
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
                    <button>Sign in</button>
                </form>
                <div className='forget__password'>
                    <Link>Forgot Password ?</Link>
                </div>
                <p className='auth__switch'>Don't have an account? <Link to="/login">Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login