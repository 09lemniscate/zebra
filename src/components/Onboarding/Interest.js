import React, { useState } from "react";
import './Intro.css';


const Interest = ({updateFormJson})=>{
    const [whichCountry,setWhichCountry] = useState('');
    const [lEnglish,setLEnglish] = useState('');
    const [lFrench,setLFrench] = useState('');
    const [lGerman,setLGerman] = useState('');
    const [working,setWorking] = useState('');
    const [salary,setSalary] = useState('');
    const handleNext = (e)=>{
        e.preventDefault()
        let updatedValue = {
            phone: localStorage.getItem('phone'),
            countries:whichCountry,
            english_level:lEnglish,
            french_level:lFrench,
            german_level:lGerman,
            availability:working,
            expected_salary:salary
        }
        console.log(updatedValue)
        if(whichCountry && working && salary && lGerman && lEnglish && lFrench)
            updateFormJson(updatedValue,'int','dashboard');
    }

    const handleBtnCountry = (e,val)=>{
        e.preventDefault();
        setWhichCountry(val)
    }
    const handleBtnWork = (e,val)=>{
        e.preventDefault();
        setWorking(val)
    }
 return (<div className="intro">
            <h3>Let us know about your job interests</h3>
            <form className="intro-form">
            <label>Which countries are you open to work?</label>
            <div className="btn-grp">
                <button className={`btn ${whichCountry === 'All' ? 'active':''}`} onClick={(e)=>handleBtnCountry(e,'All')}>All countries</button>
                <button className={`btn ${whichCountry === 'UK' ? 'active':''}`} onClick={(e)=>handleBtnCountry(e,'UK')}>UK</button>
                <button className={`btn ${whichCountry === 'Germany' ? 'active':''}`} onClick={(e)=>handleBtnCountry(e,'Germany')}>Germany</button>
                <button className={`btn ${whichCountry === 'France' ? 'active':''}`} onClick={(e)=>handleBtnCountry(e,'France')}>France</button>
            </div>
            <label>Which languages do you speak?</label>
            <div className="languages">
            <div className="lang">
            <label>English</label>
            <input className='input-field-1' onChange={(event)=>setLEnglish(event.target.value)} value={lEnglish}  placeholder='' required />
            </div>
            <div  className="lang">
            <label>German</label>
            <input className='input-field-1' onChange={(event)=>setLGerman(event.target.value)} value={lGerman}  placeholder='' required />
            </div>
            <div  className="lang">
            <label>French</label>
            <input className='input-field-1' onChange={(event)=>setLFrench(event.target.value)} value={lFrench}  placeholder='' required />
            </div>
            </div>
            
            <label>When can you start working?</label>
            <div className="btn-grp">
                <button className={`btn ${working === 'Immedietly' ? 'active':''}`} onClick={(e)=>handleBtnWork(e,'Immedietly')}>Immedietly</button>
                <button className={`btn ${working === '1month' ? 'active':''}`} onClick={(e)=>handleBtnWork(e,'1month')}>1 month</button>
                <button className={`btn ${working === '3month' ? 'active':''}`} onClick={(e)=>handleBtnWork(e,'3month')}>3 months</button>
                <button className={`btn ${working === '6month' ? 'active':''}`} onClick={(e)=>handleBtnWork(e,'6month')}>6 months</button>
            </div>
            <label>What is your expected salary?</label>
            <input className='input-field-1'  onChange={(event)=>setSalary(event.target.value)} value={salary}  placeholder='' required />
            </form>
            <button className="btn-next" onClick={handleNext}>Next</button>
        </div>
 )
}

export default Interest;