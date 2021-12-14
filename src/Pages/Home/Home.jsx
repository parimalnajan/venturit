import React from 'react'
import Activity from './Activity'
import Dashboard  from './Dashboard'
import Events from './Events/Events'

import './Home.css'
import Progress from './Progress/Progress'
function Home() {
    return (
        <div>
        <Dashboard/>
        <Events/>
        <Activity/>
        <Progress/>
        </div>
    )
}

export default Home
