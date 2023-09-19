import React, { useState ,useContext} from 'react';
import '../../App.css';
import Intro from '../Onboarding/Intro';
import int from '../../assets/int.svg';
import intdisable from '../../assets/int-disable.svg';
import edu from '../../assets/edu.svg';
import edudisable from '../../assets/edu-disable.svg';
import exp from '../../assets/exp.svg';
import expdisable from '../../assets/exp-disable.svg';
import intro from '../../assets/intro.svg';
import introdisable from '../../assets/intro-disable.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.svg';
import Education from '../Onboarding/Education';
import Experience from '../Onboarding/Experience';
import './Onboarding.css';
import Interest from '../Onboarding/Interest';
import Dashboard from '../Onboarding/Dashboard';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { instance } from '../../axios';


export default function Onboarding() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()
  const [activeSection,setActiveSection] = useState('exp');
  const [formJson,setFormJson] = useState({})
  const handleSection = (section)=>{
    setActiveSection(section);
  }
  const updateFormJson = (appendJson,type,section)=>{
    if(type ==='intro'){
      instance.post('users/check-profile/',appendJson).then(res=>{
        console.log(res)
        setActiveSection(section);
      })
    }
    if(type === 'edu'){
      instance.post('users/check-education/',appendJson).then(res=>{
        console.log(res)
        setActiveSection(section);
      })
    }
    if(type === 'exp'){
      instance.post('users/check-employment/',appendJson).then(res=>{
        console.log(res)
       // setActiveSection(section);
      })
    }
    if(type === 'int'){
      instance.post('users/job-interest/',appendJson).then(res=>{
        console.log(res)
       setActiveSection(section);
      })
    }
    let updatedJson = {...formJson,...appendJson};
    setFormJson(updatedJson);
  }
  const handleLogout = () => {
    localStorage.clear()
    setIsAuthenticated(false)
    navigate("/");
  };
  return (
  <>
    <div className='header-onboarding'>
      <div className='navbar-logo'>Zebra</div>
      <img src={logout} alt='logout' onClick={handleLogout}/>
    </div>
    <div className='main-section'>
      <div className='sidenav'>
         {activeSection ===  'dashboard' && <div className='sec'>
          <img src={avatar} alt='avatar'/>
            <span>Krishna Kesavan</span>
          </div>
}
          <div className='sec'>
            <img src={activeSection ===  'intro' ?intro:introdisable} alt='intro'/>
            <span  className={activeSection !== 'edu' ? 'disable':''}>Introduction</span>
          </div>
          <div className='sec'>
            <img src={activeSection ===  'edu' ? edu :edudisable} alt='edu'/>
            <span className={activeSection !== 'edu' ? 'disable':''}>Education</span>
          </div>
          <div className='sec'>
            <img src={activeSection ===  'exp' ? exp : expdisable} alt='exp'/>
            <span className={activeSection !== 'exp' ? 'disable':''}>Experience</span>
          </div>
          <div className='sec'>
            <img src={activeSection ===  'int' ? int : intdisable} alt='int'/>
            <span className={activeSection !== 'int' ? 'disable':''}>Job interests</span>
          </div>
      </div>
      <>
     {activeSection === 'intro' && <Intro updateFormJson={updateFormJson}/>}
      {activeSection ===  'edu' &&<Education  updateFormJson={updateFormJson}/>}
      {activeSection ===  'exp' &&<Experience sectionChange={handleSection} updateFormJson={updateFormJson}/>}
      {activeSection ===  'int' &&<Interest  updateFormJson={updateFormJson}/>}
      {activeSection ===  'dashboard' &&<Dashboard />}

      </>
    </div>
   
  </>
  )
}
