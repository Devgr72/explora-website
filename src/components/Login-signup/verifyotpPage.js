import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function VerifyOtpPage() {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state)
  const email = location.state?.mail;
  const handleOtpSubmit = async () => {
    try {
      
      const response = await axios.post('http://localhost:8000/verify-otp', { email,otp });
      if (response.status === 200 && response.data.status === 'Success') {
        
        alert('OTP Verified. User data saved.');
        navigate('/loginpage');
        
      } else {
        setOtpError('Invalid OTP, please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP', error);
      setOtpError('Error verifying OTP. Please try again.');
    }
  };
  
  return (
    <div>
      <h1>Enter OTP</h1>
      <div className='input'>
        <input
          type='text'
          placeholder='Enter 6 digit OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {otpError && <div className='error'>{otpError}</div>}
      </div>
      <button onClick={handleOtpSubmit}>Verify OTP</button>
    </div>
  );
}

export default VerifyOtpPage;
