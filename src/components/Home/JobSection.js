import React, { useEffect, useState }  from 'react';

import { Button } from "../Button";
import './JobSection.css';

import img1 from '../../assets/img-10.png';
import img2 from '../../assets/img-11.png';
import hospitality from '../../assets/hospitality.svg'
import healthcare from '../../assets/healthcare.svg'


const JobSection = ({type}) => {
  const [isToggle,setIsToggle] = useState(false);
  const [changeSection,setChangeSection] = useState(1);
  useEffect(()=>{
    let id = setTimeout(() => {
      let c = changeSection;
      if(c === 4) {
        c = 0;
      }
      c = c+1;
      setChangeSection(c);
      setIsToggle(!isToggle)
    }, 3000);
    return()=>{
      clearTimeout(id)
    }
  },[changeSection])
    
  return (
    <>
    <div className="job-container">
      <div className="display-text">
      {type ==='employee' &&  <>
        <h2>
          Find the European <br />
          <span className='name-job'>{!isToggle ? 'healthcare job':'hospitality job'}</span> where <br />
          you are valued
        </h2>
        <div className="text-1">
        <p>Zebra is the leading marketplace for international jobs.</p>
        <p>Choose from country, field and your desired roles for</p>
        <p>opportunities to fit your lifestyle needs.</p>
        </div>
        </> }
        {type === 'employer' && <>
        <h2>
        Find your next hire from  <br />
          <span className='name-job'>India</span> on Zebra. <br />
        </h2>
        <div className="text-1">
          <p>Zebra is the Vivian Health is the largest clinical talent marketplace with </p>
        <p>more than 100,000 Indians researching and finding their next job </p>
        <p>opportunity in Europe.</p>
        </div>
        </> }
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Create a free profile
        </Button>
      </div>
      <div className="image-card">
        <img src={!isToggle ? img1 : img2} alt='im1'/>
      </div>
    </div>
    {type === 'employee' &&<div className="small-section">
            <div className="card">
                <div className='img-sec'>
                    <img src={hospitality} alt='hospitality'/>
                    <span>Hospitality</span>
                </div>
                <div className='text-1'>24331 jobs &gt;</div>
                <div className='text-1'>Explore now</div>
            </div>
            <div className="card">
            <div className='img-sec'>
                    <img src={healthcare} alt='healthcare'/>
                    <span>Healthcare</span>
                </div>
                <div className='text-1'>24331 jobs &gt;</div>
                <div className='text-1'>Explore now</div>
            </div>
        </div>}
    </>
  );
};

export default JobSection;
