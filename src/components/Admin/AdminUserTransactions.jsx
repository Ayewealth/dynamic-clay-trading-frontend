import React, { useContext, useEffect } from 'react'
import { CiMenuFries } from 'react-icons/ci'
// import AuthContext from '../../context/AuthContext'
import { AiOutlineTransaction } from "react-icons/ai";
import { Alert } from '@mui/material';

const AdminUserTransactions = ({ handleCloseSidebar }) => {
    // const { userProfile, allUsersTransactions, allTransactions, showAlert, alertSeverity, alertMessage, setShowAlert, setAlertMessage, setAlertSeverity } = useContext(AuthContext)

    // useEffect(() => {
    //     allUsersTransactions()
    // }, [allUsersTransactions])

    // const handleApproveTransaction = async (id, e) => {
    //     try {
    //         e.preventDefault()
    //         const formData = new FormData();
    //         formData.append("status", "done");

    //         const response = await fetch(`https://crest-backend.onrender.com/api/transaction/${id}`,
    //             {
    //                 method: "PATCH",
    //                 body: formData
    //             }
    //         )
    //         if (response.ok) {
    //             setShowAlert(true);
    //             setAlertMessage("Transaction Approved");
    //             setAlertSeverity("success");
    //         }
    //         else {
    //             const errorData = await response.json();
    //             const errorMessage = errorData.error || "Approval failed";
    //             console.log(errorMessage)
    //             setShowAlert(true);
    //             setAlertMessage(errorMessage)
    //             setAlertSeverity("error");
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleDeclineTransaction = async (id, e) => {
    //     try {
    //         e.preventDefault()
    //         const formData = new FormData();
    //         formData.append("status", "declined");

    //         const response = await fetch(`https://crestbackend.up.railway.app/api/transaction/${id}`,
    //             {
    //                 method: "PATCH",
    //                 body: formData
    //             }
    //         )
    //         if (response.ok) {
    //             setShowAlert(true);
    //             setAlertMessage("Transaction Declined");
    //             setAlertSeverity("success");
    //         }
    //         else {
    //             const errorData = await response.json();
    //             const errorMessage = errorData.error || "Declined failed";
    //             console.log(errorMessage)
    //             setShowAlert(true);
    //             setAlertMessage(errorMessage)
    //             setAlertSeverity("error");
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
                        <h2>User Transactions <AiOutlineTransaction /></h2>
                    </div>
                </div>
                <div className='users__transactions'>
                    {/* {allTransactions && allTransactions.map((transaction) => ( */}
                    <div className='users__transactions-transaction'>
                        <h3>username</h3>
                        <div className='users__transactions-inner'>
                            <p>Transaction Type: <span>Deposit</span></p>
                            <p>Wallet: Bitcoin</p>
                            {/* {transaction.transaction_type === "withdrawal" && ( */}
                            <p id='wallet_add'>Wallet Address: <h5>1234567890</h5></p>
                            {/* )} */}
                            <p>Amount: <span>100</span></p>
                            <p>Date: <span>April 5, 2024</span></p>
                        </div>
                        {/* {transaction.status === "pending" && (
                            <div className='users__transactions-btns'>
                                <button onClick={(e) => handleApproveTransaction(transaction.id, e)}>approve</button>
                                <button onClick={(e) => handleDeclineTransaction(transaction.id, e)}> decline</button>
                            </div>
                        )} */}
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </div >
    )
}

export default AdminUserTransactions