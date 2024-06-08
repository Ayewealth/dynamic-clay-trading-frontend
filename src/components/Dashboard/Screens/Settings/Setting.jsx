import React, { useContext, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import Alert from '@mui/material/Alert';

import './Setting.css';
// import AuthContext from '../../../../context/AuthContext';

const Setting = ({ handleCloseSidebar }) => {
  // const { userProfile, setShowAlert, setAlertMessage, setAlertSeverity, showAlert, alertSeverity, alertMessage } = useContext(AuthContext)

  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const defaultImage = userProfile.user.profile_picture

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     if (file.size <= 10 * 1024 * 1024) {
  //       setImage(file)
  //     } else {
  //       setShowAlert(true);
  //       setAlertMessage("File size should be less than 10MB.");
  //       setAlertSeverity("error");
  //     }
  //   } else {
  //     setImage(userProfile.user.profile_picture);
  //   }
  // };


  // const handleProfileUpdate = async (e) => {
  //   e.preventDefault()

  //   const formData = new FormData();
  //   formData.append('first_name', firstName);
  //   formData.append('last_name', lastName);
  //   formData.append('email', email);
  //   formData.append('password', password);
  //   if (image) {
  //     formData.append('profile_picture', image);
  //   }

  //   try {
  //     const response = await fetch(`https://crestbackend.up.railway.app/api/users/${userProfile.user.id}/`,
  //       {
  //         method: "PATCH",
  //         body: formData,
  //       }
  //     )
  //     if (response.ok) {
  //       setShowAlert(true)
  //       setAlertMessage("Profile Updated Successful");
  //       setAlertSeverity("success");
  //     }
  //     else {
  //       const errorData = await response.json();
  //       const errorMessage = errorData.error || "Profile Update Failed";
  //       console.log(errorMessage)
  //       setShowAlert(true);
  //       setAlertMessage(errorMessage)
  //       setAlertSeverity("error");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
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

      <div className='settings'>
        <div className='settings-header'>
          <h3>Settings</h3>
        </div>
        <div className="settings-body">
          <div className='settings-profile-picture' onClick={handleImageClick}>
            {/* <img src={image ? URL.createObjectURL(image) : defaultImage} alt="profile img" className="profile-img" /> */}
            <div className='user__name'>
              <h2>John</h2>
              <h2>Doe</h2>
            </div>
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={{}}
          />
        </div>
        <div className="settings-user-info">
          <form id='setting_form'>
            <p>Edit Profile</p>
            <div className="user-info-field-wrapper">
              <div className="user-info-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="user-info-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="user-info-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="user-info-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={{}} className="button">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;