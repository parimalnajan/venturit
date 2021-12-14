import React from 'react'
import './Progress.css'
import ProgressBar from './ProgressBar'
import progressFooter from '../../../Assets/Progress/Progress-bottom.png'
function Progress() {    
    return (
        <section className='progress-wrapper'>
            <ProgressBar/>
            <div className="progress-data__wrapper">
                <div className="title">
                    Progress</div>
                <div className="progress-data">
                    <ProgressCard subject="Total Webinars" value="9" />
                    <ProgressCard subject="Pending Assignments" value="0" />
                    <ProgressCard subject="Total Units" value="5" />
                    <ProgressCard subject="Total Readings" value="14" />
                    <ProgressCard subject="Total Videos" value="5" /></div>
                <div>
                    <img  className="progress-footer" src={progressFooter}></img>
                   
                    </div>
            </div>
        </section>
    )
}
export default Progress

const ProgressCard=({subject,value})=>{
    return(
        <div className="progress-card">
            <div className="progress-card__subject">
                {subject}
            </div>
            <div className="progress-card__value">
                {value}
            </div>
        </div>
    )
}
