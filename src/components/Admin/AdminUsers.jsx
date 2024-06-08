import React, { useContext, useEffect } from 'react'
import { CiMenuFries } from 'react-icons/ci'
// import AuthContext from '../../context/AuthContext'
import { FaUsers } from 'react-icons/fa'

import "./Admin.css"
import { Alert } from '@mui/material'

const AdminUsers = ({ handleCloseSidebar }) => {
    // const { userProfile, allUsers, allUsersDetails, showAlert, alertSeverity, setShowAlert, alertMessage, } = useContext(AuthContext)

    // useEffect(() => {
    //     allUsersDetails()
    // }, [allUsersDetails])
    return (
        <div className='main-container'>
            {/* {showAlert && (
                <Alert
                    severity={alertSeverity}
                    onClose={() => setShowAlert(false)}
                    style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                >
                    {alertMessage}
                </Alert>
            )} */}
            <header className='main-container-nav'>
                <div className='close-sider-button' onClick={handleCloseSidebar} >
                    <CiMenuFries />
                </div>
                <div className="heading">
                    <h2>Hello,</h2>
                    <div>
                        <h2>John</h2>
                        <h2>Doe</h2>
                    </div>
                    👋
                </div>
            </header>

            <div className='main__content'>
                <div className="users__container">
                    <div className='users__container-head'>
                        <h2>Users <FaUsers /></h2>
                    </div>
                </div>
                <div className="users__container-users">
                    {/* {allUsers && allUsers.map((users) => ( */}
                    <div className='users__container-users-user'>
                        <h3>John Doe</h3>

                        <div className='user-inner'>
                            <p>John Doe</p>
                            <p>Reg-Date: April 5, 2024</p>
                            <p>example@gmail.com</p>
                        </div>

                        <div className='user-inner-cash'>
                            <p>Balance: <span>$10000</span></p>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    )
}

export default AdminUsers