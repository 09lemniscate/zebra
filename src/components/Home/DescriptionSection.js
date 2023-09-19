import React,{ useEffect, useState } from 'react';
import map1 from '../../assets/map-1.png';
import map2 from '../../assets/map-2.png';
import map3 from '../../assets/map-3.png';
import map4 from '../../assets/map-4.png';
import './DescriptionSection.css';

const DescriptionSection = ()=>{
    const [changeSection,setChangeSection] = useState(1);
    useEffect(()=>{
      let id = setTimeout(() => {
        let c = changeSection+1;
        if(c === 5) {
          c = 1;
        }
        setChangeSection(c);
      }, 3000);
      return()=>{
        clearTimeout(id)
      }
    },[changeSection])
    return (
        <div className="desc-section">
            <div className="desc-section-left">
                <div className={`section-one ${changeSection===1 ? 'active':'disable'}`}>
                    <h3>Access to all European jobs</h3>
                    <span>Search for jobs that match your needs and qualifications using industry-specific filters.</span>
                </div>
                <div className={`section-one ${changeSection===2 ? 'active':'disable'}`}>
                    <h3>Schedule interviews</h3>
                    <span>With Zebra you directly get interviews with employers in your favourite country.</span>
                </div>
                <div className={`section-one ${changeSection===3 ? 'active':'disable'}`}>
                    <h3>Get multiple offers</h3>
                    <span>We provide pay transparency so you can confidently pick the best offer.</span>
                </div>
                <div className={`section-one ${changeSection===4 ? 'active':'disable'}`}>
                    <h3>Visa and Relocation support</h3>
                    <span>We help you in visa and relocation to ensure that you have a smooth transition.</span>
                </div>
            </div>
            <div className="desc-section-right">
              {changeSection === 1 &&  <img className='img-desc' src={map1} alt='map1'/>}
              {changeSection === 2 &&  <img className='img-desc' src={map2} alt='map2'/>}
              {changeSection === 3 &&  <img className='img-desc' src={map3} alt='map3'/>}
              {changeSection === 4 &&  <img className='img-desc' src={map4} alt='map4'/>}
            </div>
        </div>
    )
}

export default DescriptionSection;