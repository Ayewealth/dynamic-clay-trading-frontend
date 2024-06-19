import React, { useContext, useEffect, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import AuthContext from '../../context/AuthContext'
import { FaUsers } from 'react-icons/fa'

import "./Admin.css"
import { Alert, CircularProgress } from '@mui/material'

const AdminUsers = ({ handleCloseSidebar }) => {
    const { userProfile, allUsers, allUsersDetails, showAlert, alertSeverity, setShowAlert, alertMessage, setAlertMessage, setAlertSeverity } = useContext(AuthContext)

    const [walletBalances, setWalletBalances] = useState({})
    const [loading, setLoading] = useState({})

    useEffect(() => {
        allUsersDetails()
    }, [allUsersDetails])

    const handleInputChange = (userId, walletId, value) => {
        setWalletBalances(prevState => ({
            ...prevState,
            [userId]: {
                ...prevState[userId],
                [walletId]: value
            }
        }))
    }

    const handleUpdateClick = async (userId, walletId) => {
        setLoading(prevState => ({
            ...prevState,
            [userId]: {
                ...prevState[userId],
                [walletId]: true
            }
        }))

        try {
            let response = await fetch(`https://dynamic-clay-trading.onrender.com/api/wallets/${walletId}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    balance: walletBalances[userId][walletId]
                })
            })

            const data = await response.json()

            if (response.ok) {
                setShowAlert(true)
                setAlertMessage("User Wallet Balance Updated Successfully")
                setAlertSeverity("success")
            } else {
                setShowAlert(true)
                setAlertMessage("An Error Occurred During Update. Try Again")
                setAlertSeverity("error")
                console.log(data)
            }
        } catch (error) {
            console.log("Error", error)
            setShowAlert(true)
            setAlertMessage("An Error Occurred During Update. Try Again")
            setAlertSeverity("error")
        } finally {
            setLoading(prevState => ({
                ...prevState,
                [userId]: {
                    ...prevState[userId],
                    [walletId]: false
                }
            }))
        }
    }
    return (
        <div className='main-container'>
            {showAlert && (
                <Alert
                    severity={alertSeverity}
                    onClose={() => setShowAlert(false)}
                    style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
                >
                    {alertMessage}
                </Alert>
            )}
            <header className='main-container-nav'>
                <div className='close-sider-button' onClick={handleCloseSidebar} >
                    <CiMenuFries />
                </div>
                <div className="heading">
                    <h2>Hello,</h2>
                    <div>
                        <h2>{userProfile && userProfile.user.full_name}</h2>
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
                    {allUsers && allUsers.map((users) => (
                        <div key={users.user.id} className='users__container-users-user'>
                            <h3>{users.user.full_name}</h3>

                            <div className='user-inner'>
                                <p>{users.user.full_name}</p>
                                <p>Reg-Date: {users.user.date_joined}</p>
                                <p>{users.user.email}</p>
                            </div>

                            <div className='user-wallets'>
                                {users.wallets.map((wallet) => (
                                    <div className='user-wallet' key={wallet.id}>
                                        <div className='user-wallet-top'>
                                            <p>{wallet.title}</p>
                                            <span>Balance: {wallet.balance}</span>
                                        </div>
                                        <div className='user-wallet-bottom'>
                                            <input
                                                type="number"
                                                placeholder={`Update User ${wallet.title} Balance`}
                                                value={walletBalances[users.user.id]?.[wallet.id] || ''}
                                                onChange={(e) => handleInputChange(users.user.id, wallet.id, e.target.value)}
                                            />
                                            <button onClick={() => handleUpdateClick(users.user.id, wallet.id)}>
                                                {loading[users.user.id]?.[wallet.id] ? (
                                                    <CircularProgress color="inherit" size="20px" />
                                                ) : "Update"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='user-inner-cash'>
                                <p>Balance: <span>${users.total_wallet_balance}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminUsers