import React, { useContext, useEffect } from 'react';
import '../../App.css';
import Footer from '../Home/Footer';
import JobSection from '../Home/JobSection';
import SmallSection from '../Home/SmallSection';
import Testimonial from '../Home/Testimonial';
import DescriptionSection from '../Home/DescriptionSection';
import { AuthContext } from '../../AuthContext';

function Home() {
  const {setIsEmployee} = useContext(AuthContext);
  useEffect(()=>{
    setIsEmployee(true);
  },[])
  return (
    <>
      <JobSection type={'employee'}/>
      <DescriptionSection/>
      <SmallSection/>
      <Testimonial type={'employee'}/>
      <Footer />
    </>
  );
}

export default Home;
