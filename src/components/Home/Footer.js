import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import footer1 from '../../assets/footer-1.png';
import footer2 from '../../assets/footer-2.png';

function Footer() {
  return (
    <div>
    <div className='footer-container'>
      <div className='left-footer'>
        <div className='left-footer-container'>
          <h2>Join thousands of international workers on Zebra</h2>
          <Button buttonStyle='btn--outline'>Join</Button>
        </div>
      </div>
      <div className='right-footer'>
          <img className='img-footer-1' src={footer1} alt='footer1'/>
          <img className='img-footer-2' src={footer2} alt='footer2'/>
        </div>
    </div>
    <div className='line'></div>
    <div className='last'>
      <p>2023 Zebra |All rights reserved</p>
      <p>Privacy policy</p>
      <p>Terms & conditions</p>
    </div>
    </div>
  );
}

export default Footer;
