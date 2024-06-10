import React, { useContext, useEffect, useState } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


import AuthContext from '../../../../context/AuthContext';
import "./Investment.css"

import { CircularProgress } from '@mui/material';

const Investment = ({ handleCloseSidebar }) => {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState('');
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false)
  const [investOption, setInvestOption] = useState("")

  const { userProfile, authTokens, setShowAlert, setAlertMessage, setAlertSeverity, showAlert, alertSeverity, alertMessage, allinvestment, allInvestment } = useContext(AuthContext)

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleInvestNow = (investmentPlan) => {
    setPlan(investmentPlan)
    handleOpen()
  }

  const handleInvestment = async (e) => {
    setLoading(true)
    try {
      e.preventDefault()

      const response = await fetch("https://dynamic-clay-trading.onrender.com/api/investment_sub/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`
        },
        body: JSON.stringify({
          investment_plan: plan,
          wallet: wallet,
          amount: amount
        })
      })

      if (response.status === 201) {
        setShowAlert(true)
        setAlertMessage("Investment Successful");
        setAlertSeverity("success");
        handleClose()
      }
      else {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Investment failed";
        console.log(errorMessage)
        setShowAlert(true);
        setAlertMessage(errorMessage)
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    allInvestment()
  }, [])

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
        <div className="investment__container">
          <div className='investment__container-head'>
            <h2>INVESTMENT PLAN'S</h2>
          </div>
          <div className="investment__container-plans">
            {allinvestment.map((investmentPlan) => (
              <div className="plan" key={investmentPlan.id}>
                <div>
                  <p>{investmentPlan.plan} Plan</p>
                  <h2>{investmentPlan.daily_return_rate} %</h2>
                  <p>30 Days</p>
                  <h3>Features</h3>
                </div>
                <ul>
                  <li><IoMdCheckmarkCircleOutline /> {investmentPlan.plan} Level Security</li>
                  <li><IoMdCheckmarkCircleOutline />   Minimum -${investmentPlan.minimum_amount}</li>
                  <li><IoMdCheckmarkCircleOutline />   Maximum -${investmentPlan.maximum_amount}</li>
                  <li><IoMdCheckmarkCircleOutline />   Instant Withdrawal</li>
                  <li><IoMdCheckmarkCircleOutline />   24/7 Support</li>
                </ul>
                <button onClick={() => handleInvestNow(investmentPlan.id)}>Invest Now</button>
              </div>
            ))}
          </div>
          <Backdrop open={open}>
            <div className='investment__box'>
              <h2>fill the fields below:</h2>
              <select value={wallet} onChange={(e) => setWallet(e.target.value)}>
                <option value="" disabled>Select Wallet</option>
                {userProfile && userProfile.wallets.map((wallet) => (
                  <option value={wallet.id} key={wallet.id}>{wallet.title}</option>
                ))}
              </select>
              <select value={investOption} onChange={(e) => setInvestOption(e.target.value)}>
                <option value="" disabled>Select Trading Option</option>
                <option value="AI">AI Trading</option>
                <option value="Self">Self Trading</option>
              </select>
              <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
              <div className='invest-btns'>
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleInvestment}>
                  {loading ? (
                    <CircularProgress color="inherit" size="20px" />
                  ) : 'Invest'}
                </button>
              </div>
            </div>
          </Backdrop>
        </div>
        <div className='investment__container'>
          <div className='investment__container-head'>
            <h2>MY INVESTMENT</h2>
          </div>
          <div className='investment__container-table'>
            <div className='investment__container-table__head'>
              <p id='trans'>Plan</p>
              <p id='wallet'>Amount</p>
              <p id='amount'>Earnings</p>
              <p id='start'>Start</p>
              <p id='end'>End</p>
            </div>
            <div className='profile-bar__design' />
            {userProfile && userProfile.investment.map((investment) => (
              <div className='main__content-activity-table__content' key={investment.id}>
                <div id='transcoin'>
                  <p>{investment.investment_plan_plan}</p>
                </div>
                <p id='wallet'>{investment.amount}</p>
                <span id='amount' className='earning'>${investment.total_return}</span>
                <span id='start' className="status">{investment.subscription_date}</span>
                <span id='end' className='end_date'>{investment.end_date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investment;