import React, { useState } from 'react'
import Search from './Search'
import notificationIcon from '../Assets/Header/Notif.png'
import brandIcon from '../Assets/Header/Group.png'
import chatIcon from '../Assets/Header/Chat.png'
import profilePic from '../Assets/Header/Picture.png'
import arrowDown from '../Assets/Header/ArrowDown.png'

import './Header.css'

function Header() {
  return (
    <div className="header-wrapper">
      <div className="brand">
        <img src={brandIcon}></img>
      </div>

      <div className="header-content">
        <Search />
        <button className="add-button">+ ADD</button>

        <div className="notification-icon">
          <img src={notificationIcon}></img>
          <div className="badge"></div>
        </div>

        <div className="chat">
          <img src={chatIcon}></img>
        </div>

        <div className="profile-name">Clarence Russel</div>
        <div className="profile-picture">
          {' '}
          <img src={profilePic}></img>
        </div>
        <div className="profile-arrow">
          {' '}
          <img src={arrowDown}></img>
        </div>
      </div>
    </div>
  )
}

export default Header
