import React from 'react'
import englishIcon from '../../../Assets/Dashboard/english.png'
import dashBackground from '../../../Assets/Dashboard/dashboard.png'
import rocket from '../../../Assets/Dashboard/rocket.png'
import './Dashboard.css'
const Dashboard = () => {
    return (
        <section className="dashboard-wrapper">
            <div className="dashboard-row">
            <h2 className="title">Dashboard</h2>            
            <div className="language">
                <p className="language-text">Currently Learning</p>
                <img src={englishIcon}></img>
                <span className="language-name">
                     English
                </span>                
            </div>
            </div>

            <div className="welcome">
                <img className="dash-background" src={dashBackground}></img>
             
                <img className="rocket"src={rocket}></img>
               
              <div className="welcome-text">Welcome back, Clarence  
                <div className="welcome-subtext">Ta-da! You're up do date.</div>
                </div>
              
              </div>
        </section>
    )
}

export default Dashboard
