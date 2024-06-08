import React, { useContext } from 'react';
import { CiMenuFries } from "react-icons/ci";
import Alert from '@mui/material/Alert';

import Chart from "../../assets/chart.png"
// import AuthContext from '../../context/AuthContext';

const DashboardHome = ({ handleCloseSidebar }) => {
  // const { userProfile, showAlert, alertSeverity, setShowAlert, alertMessage, } = useContext(AuthContext)
  return (
    <div className='main-container'>
      {/* {showAlert && (
        <Alert
          severity={alertSeverity}
          onClose={() => setShowAlert(false)}
          style={{ position: 'fixed', top: "2%", right: "5%", zIndex: 9999, width: "40%" }}
        >
          {{}}
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
        <div className='main__content-assets-container'>
          <div className='main__content-assets-head'>
            <h2>ASSETS</h2>
          </div>
          <div className='main__content-assets'>
            {/* {userProfile && userProfile.wallets.map((wallet) => ( */}
            <div className='main__content-asset'>
              <h3>title</h3>
              <div id='asset'>
                <div className='asset__top'>
                  <div className='asset__balance'>
                    $
                    <p>1000</p>
                  </div>
                  <div className='chart'>
                    <img src={Chart} alt="" />
                  </div>
                </div>
                <div className='asset__bottom'>
                  <div>
                    <p>Profit</p>
                    <span id='asset__bottom-profit'>+ 2,87%</span>
                  </div>
                  <div>
                    <p>Loss</p>
                    <span id='asset__bottom-loss'>- 0,17%</span>
                  </div>
                  <div>
                    <p>Netral</p>
                    <span id='asset__bottom-netral'>2,70%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
        <div className='main__content-activity-container'>
          <div className='main__content-assets-head'>
            <h2>ACTIVITY</h2>
          </div>
          <div className='main__content-activity-table'>
            <div className='main__content-activity-table__head'>
              <p id='trans'>Transactions</p>
              <p id='amount'>Type</p>
              <p id='total'>Amount</p>
              <p id='status'>Status</p>
              <p id='date'>Date</p>
            </div>
            {/* <div className='profile-bar__design' /> */}
            {/* {userProfile && userProfile.transactions.map((transaction) => ( */}
            <div className='main__content-activity-table__content'>
              <div id='transcoin'>
                <p>Bitcoin</p>
              </div>
              <p id='amount'>Deposit</p>
              <span id='total' className='das__span'>$100</span>
              <span id='status' className={"status"}>Done</span>
              <span id='date' className='das__span'>April 5, 2024</span>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>

  );
};

export default DashboardHome;