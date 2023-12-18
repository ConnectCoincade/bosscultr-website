import React, { useEffect } from 'react'
import './preloader.css'


function preloader() {

 
  return (
    <>
    <div id="loader-home">
      <div id='loader-heading'>ACTIVATING BOSS MODE</div>
      <div className='loader' >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
      {/* <canvas id="spinner" width="300" height="300"></canvas> */}
      
    </>
  )
}

export default preloader