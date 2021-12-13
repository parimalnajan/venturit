import React from 'react'
import './Activity.css'
import ActivityCard from './ActivityCard'

function Activity() {
  return (
    <div className="activity-wrapper">
      <div className="activity-row">
        <div className="title">Activity</div>
        <div className="activity-border"></div>
        <div className="arrow"> v </div>
      </div>
   
    <ActivityCard type="followers" message="You have 5 new followers"/>
    <ActivityCard type="events" message="3 new events were added to your calendar"/>
    <ActivityCard type="assignments" message="You have 3 pending readings to complete"/>
    </div>
  )
}

export default Activity
