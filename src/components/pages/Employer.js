import React, { useEffect,useContext } from 'react';
import '../../App.css';
import Footer from '../Home/Footer';
import JobSection from '../Home/JobSection';
import Testimonial from '../Home/Testimonial';
import EmployerSection from '../Home/EmployerSection';
import { AuthContext } from '../../AuthContext';

function Employer() {
    const {setIsEmployee} = useContext(AuthContext);
    useEffect(()=>{
        setIsEmployee(false)
      },[])
  return (
    <>
      <JobSection type={'employer'}/>
      {/* <DescriptionSection/>
      <SmallSection/> */}
      <EmployerSection/>
      <Testimonial type={'employer'} />
      <Footer />
    </>
  );
}

export default Employer;
