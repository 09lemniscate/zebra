import React from 'react';
import './SmallSection.css';
import img1 from '../../assets/img-1.png';
import line from '../../assets/line.svg';
import plane from '../../assets/plane.svg';
import plane1 from '../../assets/plane1.svg';

const SmallSection = () =>{
    return (
        <>
        <section className='section-1'>
            <h1>Thousands of <br/>European jobs<br/> in your pocket</h1>
            <img src={img1} alt='img1'/>
        </section>
        <section className='section-2'>
            <img className='line' src={line} alt='line'/>
            <img className='plane' src={plane} alt='plane'/>
            <h2>Your one-stop shop for European jobs that fit your lifestyle</h2>
            <img className='plane' src={plane1} alt='plane1'/>
            <img className='line' src={line} alt='line'/>
        </section>
        </>
    )
}

export default SmallSection;