import React, { useState } from 'react'
import './ActivityCard.css'
import arrowDown from '../../../../src/Assets/Activity/arrowdown.png'
import arrowRight from '../../../../src/Assets/Activity/arrowright.png'
import assignments from '../../../../src/Assets/Activity/assignments.png'
import events from '../../../../src/Assets/Activity/events.png'
import followers from '../../../../src/Assets/Activity/followers.png'


function ActivityCard({type,message}) {


    const[showContent,setShowContent]=useState(false);

    function toggleContent() {
        setShowContent(!showContent)
    }

    return (
        <div className='card-wrapper'>
            <div onClick={toggleContent} className="card-preview">

                <div className='preview-title'>
                   {
                   type=="assignments"?<img src={assignments}></img>:
                   type=="events"?<img src={events}></img>:
                   type=="followers"?<img src={followers}></img>:
                   <div></div>
                   }
                    <div>{message}</div>
                </div>
                <div><img src={arrowDown}></img></div>
            </div> 

           {showContent?<div className="card-content">
               ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.Et nemo pariatur molestias, eveniet exercitationem iste. Qui, 
               magnam doloremque rerum nulla dolorum repellat iste fugiat ipsam.Itaque expedita suscipit odit fugit.
               magnam doloremque rerum nulla dolorum repellat iste fugiat ipsam.Itaque expedita suscipit odit fugit.
           </div>:<div></div>}
        </div>
    )
}

export default ActivityCard
