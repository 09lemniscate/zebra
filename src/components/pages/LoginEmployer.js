import React, { useState } from 'react';
import tick from '../../assets/tick.svg';
import './Login.css'
import customerCare from '../../assets/customer-care.svg';
import { instance } from '../../axios';



export default function LoginEmployer() {
  const [firstName,setFirstName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobLink, setJobLink] = useState('');
  const [isDone, setIsDone] = useState(true);
  
  const onSubmit = (e)=>{
    e.preventDefault()
    let jsonData = {
        first_name: firstName,
        last_name: lastName,
        email: workEmail,
        company: companyName,
        job_description: jobLink
    }
    instance.post('users/check-employer/',jsonData).then((res)=>{
        setIsDone(true)
    })
  }
 
  const handleChangeFName = (e)=>{
    setFirstName(e.target.value);
}
const handleChangeLName = (e)=>{
    setLastName(e.target.value);
}
const handleChangeEmail = (e)=>{
    setWorkEmail(e.target.value);
}
const handleChangeCompnay = (e)=>{
    setCompanyName(e.target.value);
}
  return (
    <>
    
        <div className='login'>
        <div className='login-left'>
            <h2>Join Zebra to find your hire faster</h2>
            <p>Thousands of qualified candidates from India are waiting for you!</p>
            <div className='sec-1'>
            <img src={tick} alt="tick"/> <span>Add you requirement</span>
            </div>
            <div className='sec-1'>
            <img src={tick} alt="tick"/> <span>Get curated list of background checked candidates</span>
            </div>
            <div className='sec-1'>
            <img src={tick} alt="tick"/> <span>Schedule the interview and roll out the offer</span>
            </div>
            <div className='sec-1'>
            <img src={tick} alt="tick"/> <span>Visa processing and relocation support offered to the candidates</span>
            </div>
            <div className='sec-1'>
            <img src={tick} alt="tick"/> <span>24*7 support available to you and the hired candidates till they join</span>
            </div>
            <div className='sec-2'>
            <h3>Trusted by thousands of European employers in</h3>
            <h2>London</h2>
            </div>
        </div>
        <div className='login-right'>
        { !isDone && <form className='login-right-form' >
        <div className="form-control-grp">
                <div className="parent-div">
                    <label>First name </label>
                    <input className='input-field-1' onChange={handleChangeFName} value={firstName} />
                </div>
                <div className="parent-div">
                    <label>Last name</label>
                    <input className='input-field-1' onChange={handleChangeLName} value={lastName} />
                </div>
                </div>
                <label>Work Email</label>
                <input className='input-field'  onChange={handleChangeEmail} value={workEmail} placeholder=''  required/>
                <label>Company name</label>
                <input className='input-field'  onChange={handleChangeCompnay} value={companyName}  placeholder='' required/>
                <label>Share job link or details (Optional)*</label>
                <input className='input-field' name="email" onChange={(event)=>setJobLink(event.target.value)} value={jobLink}  placeholder='' required/>
            <div className='space'></div>
            <button className='submit-btn' onClick={onSubmit}>Submit</button>
            </form>
}
{
        isDone && 
        <div className="dashboard-container">
            <div className="dashboard-card">
                <img src={customerCare} alt='customerCare'/>
                <div>Thanks you for your sharing your details! Our agent will connect with you shortly.</div>
            </div>
        </div>
    }
        </div>
        </div>
    
    </>
  )
}
