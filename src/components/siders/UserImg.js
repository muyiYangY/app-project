import React from 'react'
import './Siders.css'
import avator from '../../images/avator.jpg'

export const UserImg = () => {
  return (
    <div className='user'>
        {/* <div className='imgU'><img src={avator}></img></div> */}
        <img src={avator} className='imgU'></img>
        <div className='textU'>
            <p className='pU'>111111</p>
            <p className='pU'>222222</p>
        </div>
    </div>
  )
}

