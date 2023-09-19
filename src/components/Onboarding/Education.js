import React, { useState } from "react";
import './Intro.css';


const Education = ({updateFormJson})=>{
    const[education,setEducation] = useState('');
    const[degree,setDegree] = useState('');
    const[specialization,setSpecialisation] = useState('');
    const[college,setCollege] = useState('');
    const handleNext = (e)=>{
        e.preventDefault()
        let updatedValue = {
            phone: localStorage.getItem('phone'),
            education,
            degree,
            specialization,
            college
        }
        console.log(updatedValue)
        updateFormJson(updatedValue,'edu','exp')
    }
    const handleChangeDegree = (e)=>{
        setDegree(e.target.value);
    }
    const handleChangeCollege = (e)=>{
        setCollege(e.target.value);
    }
    const handleChangeSpecialisation = (e)=>{
        setSpecialisation(e.target.value);
    }
    const handleBtn = (e,val)=>{
        console.log(e,val)
        e.preventDefault();
        setEducation(val)
    }
 return (<div className="intro">
            <h3>Lets talk about your education</h3>
            <form className="intro-form">
            <label>Your highest education</label>
            <div className="btn-grp">
                <button  className={`btn ${education === '10th' ? 'active':''}`} onClick={(e)=>handleBtn(e,'10th')}>10th or below 10th</button>
                <button  className={`btn ${education === '12th' ? 'active':''}`} onClick={(e)=>handleBtn(e,'12th')}>12th pass</button>
                <button  className={`btn ${education === 'Diploma' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Diploma')}>Diploma</button>
                <button  className={`btn ${education === 'ITI' ? 'active':''}`} onClick={(e)=>handleBtn(e,'ITI')}>ITI</button>
                <button  className={`btn ${education === 'Graduate' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Graduate')}>Graduate</button>
                <button  className={`btn ${education === 'Post-Graduate' ? 'active':''}`} onClick={(e)=>handleBtn(e,'Post-Graduate')}>Post - Graduate</button>
            </div>
            <label>Degree</label>
            <input className='input-field' onChange={handleChangeDegree} value={degree} placeholder=''  required  />
            <label>Specialisation</label>
            <input className='input-field' onChange={handleChangeSpecialisation} value={specialization} placeholder=''  required />
            <label>College name</label>
            <input className='input-field' onChange={handleChangeCollege} value={college} placeholder=''  required />
            </form>
            <button className="btn-next" onClick={handleNext}>Next</button>
        </div>
 )
}

export default Education;