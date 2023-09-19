import React, { useState } from "react";
import './Intro.css';
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const Intro = ({updateFormJson})=>{
    const [dob,setDob] = useState('');
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');

    const handleChangeName = (e)=>{
        setFirstName(e.target.value);
    }
    const handleChangeEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handleBtn = (e,val)=>{
        console.log(e,val)
        e.preventDefault();
        setGender(val)
    }
    const handleNext = (e)=>{
        e.preventDefault()
        let updatedValue = {
            phone: localStorage.getItem('phone'),
            name:firstName,
            email,
            dob:formatDate(dob),
            gender
        }
        console.log(updatedValue)
        if(firstName && email && dob)
            updateFormJson(updatedValue,'intro','edu');
    }

    return (
        <div className="intro">
            <h3>Lets get to know you better :)</h3>
            <form className="intro-form">
            <label>Full name</label>
            <input className='input-field' name="firstName" onChange={handleChangeName} value={firstName} placeholder=''  required/>
            <label>Email</label>
            <input className='input-field' name="email" onChange={handleChangeEmail} value={email}  placeholder='' required/>
            <label>Date of Birth</label>
            <div className="dob">
            {/* <DayPicker
                mode="single"
                selected={dob}
                onSelect={setDob}
                /> */}
                <DatePicker className='input-field' format="y-MM-dd" onChange={setDob} value={dob} />
            </div>
            <label>Gender</label>
            <div className="btn-grp">
                <button className={`btn ${gender === 'M' ? 'active':''}`} onClick={(e)=>handleBtn(e,'M')}>Male</button>
                <button className={`btn ${gender === 'F' ? 'active':''}`} onClick={(e)=>handleBtn(e,'F')}>Female</button>
                <button className={`btn ${gender === 'O' ? 'active':''}`} onClick={(e)=>handleBtn(e,'O')}>Other</button>
            </div>
            </form>
            <button className="btn-next" onClick={handleNext}>Next</button>
        </div>
    )
}

export default Intro