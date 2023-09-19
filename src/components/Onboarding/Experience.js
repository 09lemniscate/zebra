import React, { useState } from "react";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './Intro.css';

const ExperienceDetails = ({length,experience,index,updatedData})=>{
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [jobTittle,setJobTittle] = useState('');
    const [role,setRole] = useState('');
    const [spec,setSpec] = useState('');
    const [company,setCompany] = useState('');
    const [empType,setEmpType] = useState('');
    const [isUpdated,setIsUpdated] = useState(false);
    
    const handleBtn = (e,val)=>{
        e.preventDefault();
        setEmpType(val)
    }

    const handleAddition = (e)=>{
        e.preventDefault();
        let updatedValue = {
            phone:localStorage.getItem('phone'),
            start_date:startDate,
            end_date:endDate,
            title:jobTittle,
            role,
            spec,
            company:company,
            employment_type:empType,
            experience
        }
        updatedData(updatedValue);
        
        setIsUpdated(true);
    }

    return (
        <div className="intro mt-0 mb-0">
            {length === 1 && <h3>Lets talk about your education</h3>}
            <form className="intro-form">
            <label>Job title</label>
            <input className='input-field' onChange={event=>setJobTittle(event.target.value)} value={jobTittle} placeholder=''  required />
            <label>Role</label>
            <input className='input-field' onChange={event=>setRole(event.target.value)} value={role} placeholder=''  required />
            <label>Specialisation</label>
            <input className='input-field' onChange={event=>setSpec(event.target.value)} value={spec} placeholder=''  required />
            <label>Company</label>
            <input className='input-field' onChange={event=>setCompany(event.target.value)} value={company} placeholder=''  required />
            <div className="form-control-grp">
            <div className="parent-div">
                <label>Start Date</label>
                <DatePicker className='input-field-1' onChange={setStartDate} value={startDate} />
            </div>
            <div className="parent-div">
                <label>End Date</label>
                <DatePicker className='input-field-1' onChange={setEndDate} value={endDate} />
            </div>
            </div>
            <label>Employment type</label>
            <div className="btn-grp">
                <button className={`btn ${empType === 'Part-Time' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Part-Time')}>Part time</button>
                <button className={`btn ${empType === 'Full-time' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Full-time')}>Full time</button>
                <button className={`btn ${empType === 'Contract' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Contract')}>Contract</button>
                <button className={`btn ${empType === 'Internship' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Internship')}>Internship</button>
            </div>
            </form>
            <button className={`btn-next ${isUpdated && 'green'}`} onClick={handleAddition}>{isUpdated ? 'Added':'Add'}</button> 
        </div>
    )
}

const Experience = ({sectionChange,updateFormJson})=>{
    const [yearsOfExperience,setYearsOfExperience] = useState('')
    const [showOtherDetails,setShowOtherDetails] = useState(false)
    const [empDetails,setEmpDetails] = useState([{experience:1}])
    const handleYOE = (e)=>{
        e.preventDefault()
       if(yearsOfExperience){
        let updatedValue = {
            yearsOfExperience
        }
        updateFormJson(updatedValue)
        setShowOtherDetails(true)
       }
    }
    const handleNext = (e)=>{
        e.preventDefault()
        let updatedValue = {
            empDetails
        }
        console.log(updatedValue)
        
        sectionChange('int')
    }
    const handleAddMore = ()=>{
        let exp = {experience:empDetails.length+1};
       let updated =  [...empDetails];
       updated.push(exp);
       setEmpDetails(updated);
    }
    const handleUpdateData = (data)=>{
        updateFormJson(data,'exp','');
       let index =  data.experience -1;
       let updated =  [...empDetails];
       updated[index] = data;
       setEmpDetails(updated);
    }
 return (<div className="parent-div marign-auto gap"><div className="intro">
            <h3>Tell us about your experience</h3>
            <form className="intro-form">
            <label>How many years of work experience do you have?</label>
            <input className='input-field' value={yearsOfExperience}  onChange={(event)=>setYearsOfExperience(event.target.value)}/>
            </form>
          {!showOtherDetails &&  <button className="btn-next" onClick={handleYOE}>Next</button>}
          
        </div>
        {showOtherDetails && <>
            {empDetails.map((emp,index)=>{
                return <ExperienceDetails key={emp.experience} length={empDetails.length} index={index} experience={emp.experience} updatedData={handleUpdateData}/>
            })}
            
            <button className="btn-add mt-0" onClick={handleAddMore}>+ Add another job</button>
            <button className="btn-next" onClick={handleNext}>Next</button>
          </>}
        </div>
 )
}

export default Experience;