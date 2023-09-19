import React, { useContext, useState } from 'react';
import tick from '../../assets/tick.svg';
import edit from '../../assets/edit.svg';
import './Login.css'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import {AuthContext}  from '../../AuthContext';
import { instance } from '../../axios';

export default function Login() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();
  const [otpSection,setOtpSection] = useState(false);
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const onSubmit = (e) => {
    localStorage.setItem('phone',phone);
    e.preventDefault()
    instance.get('users/send-otp/',{ params: { phone: `91${phone}` } })
      .then((res)=>{
      if(res.status === '200'){
        setOtpSection(true)
      }
      }).catch(e=>console.log(e))
    
  }
  const handleOTP = (e)=>{
    e.preventDefault()
    if(otp.length<4) return;
    instance.post('users/verify-otp/',{ phone: `91${phone}` ,otp})
      .then((res)=>{
      if(res.status === '200'){
        setIsAuthenticated(true)
        navigate("/dashboard");
      }
      }).catch(e=>console.log(e))
   
  }
  const handlePhone = (e)=>{
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhone(onlyDigits)
  }
  return (
    <>
    <div className='login'>
      <div className='login-left'>
        <h2>Complete your profile!</h2>
        <p>Unlock jobs from top employers from the country that you choose</p>
        <div className='sec-1'>
          <img src={tick} alt="tick"/> <span>Complete your profie</span>
        </div>
        <div className='sec-1'>
          <img src={tick} alt="tick"/> <span>Get curated list of oppurtunites</span>
        </div>
        <div className='sec-1'>
          <img src={tick} alt="tick"/> <span>Interview with employer and get placed</span>
        </div>
        <div className='sec-1'>
          <img src={tick} alt="tick"/> <span>Visa processing and relocation support</span>
        </div>
        <div className='sec-1'>
          <img src={tick} alt="tick"/> <span>24*7 support to get started in the new city</span>
        </div>
        <div className='sec-2'>
          <h3>Trusted by thousands of European employers in</h3>
          <h2>London</h2>
        </div>
      </div>
      <div className='login-right'>
       {!otpSection ? ( <form className='login-right-form' >
          <label>Enter your mobile number</label>
          <input className='input-field' placeholder='+91 Eg: 9876543210' 
           value={phone} onChange={handlePhone} maxLength={10}/>
          <div className='space'></div>
          <button className='submit-btn' onClick={onSubmit}>Get OTP</button>
        </form>) : (
          <form className='login-right-form'>
          <label>Enter OTP</label>
          <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span></span>}
          containerStyle='input-field-otp'
          inputType="tel"
          renderInput={(props) => <input  {...props} />}
        />
          <p>We have sent an OTP to {phone} <img src={edit} alt='edit'/></p>
          <button className='submit-btn' onClick={handleOTP} >Login</button>
          <p>By continuing, you agree to the Zebra’s Terms of service and Privacy Policy</p>
        </form>
        )}
      </div>
    </div>
    </>
  )
}
