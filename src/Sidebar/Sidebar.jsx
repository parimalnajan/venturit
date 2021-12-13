import React from 'react'
import './Sidebar.css'
import home from'../Assets/Sidebar/home.png'
import apps from '../Assets/Sidebar/apps.png'
import file from '../Assets/Sidebar/file.png'
import stats from '../Assets/Sidebar/statistics.png'
import chat from '../Assets/Sidebar/chat.png'

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <button className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <button ><img src={home}></img></button>
      <button ><img src={apps }></img></button>
      <button ><img src={file}></img></button>
      <button ><img src={stats}></img></button>
      <button ><img src={chat}></img></button>
      
    </div>
  )
}

export default Sidebar
