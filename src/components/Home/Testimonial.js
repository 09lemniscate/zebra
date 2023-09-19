import React from "react";
import Test1 from "../../assets/test-1.png";
import "./Testimonial.css";

const Testimonial = ({type})=>{
    return (
        <div className="testimonial">
       { type === 'employer' && <h2>Fastest way to hire from India</h2>}
        <div className="t-container">
            <div className="left">
                <div className="left-container">
                <img src={Test1} alt="Test1"/>
                <p>Roshni M</p>
                <p>Nurse, Germany</p>
                </div>
            </div>
            <div className="right">
                <p>At first, I thought Vivian was a new agency [it's not], but I realized I could look at a ton of jobs on one website and talk with a bunch of recruiters. I liked that I could contact a recruiter and talk about multiple jobs.</p>
            </div>
        </div>
        </div>
    )
}
export default Testimonial