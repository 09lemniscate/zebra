import customerCare from '../../assets/customer-care.svg';
import './Dashboard.css'

const Dashboard = ()=>{
    return (
        <div className="dashboard-container">
            <h2>Welcome Krishna!</h2>
            <div className="dashboard-card">
                <img src={customerCare} alt='customerCare'/>
                <div>Thanks you for your sharing your details! Our agent will connect with you shortly.</div>
            </div>
        </div>
    )
}

export default Dashboard;