import { Button } from "../Button";
import  './EmployerSection.css';
import line from '../../assets/line.svg';
import plane from '../../assets/plane.svg';
import plane1 from '../../assets/plane1.svg';

const EmployerSection = ()=>{
    return (
        <>
        <div className="section-emp-1">
            <h1>Are you ready to find your next hire?</h1>
            <div className="text-p">
            <p>Zebra enables recruites to engege quickly and effectively with high </p>
            <p>intent job candidates, We’ll help you shorten time-to-hire and achieve </p>
            <p>your hiring goals</p>
            </div>
            <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Create a free profile
        </Button>
        </div>
        <section className='section-2'>
            <img className='line' src={line} alt="line"/>
            <img className='plane' src={plane} alt="line"/>
            <h2>Your one-stop shop to hire from India</h2>
            <img className='plane' src={plane1} alt="line"/>
            <img className='line' src={line} alt="line"/>
        </section>
        </>
    )
}

export default EmployerSection;