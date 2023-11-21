import React, { useEffect } from 'react'
import './preloader.css'


function preloader() {

  // useEffect(() => {
  //   let spinner = document.getElementById("spinner");
  //   let ctx = spinner.getContext("2d");
  //   let width = spinner.width;
  //   let height = spinner.height;
  //   let degrees = 0;
  //   let new_degrees = 0;
  //   let difference = 0;
  //   let color = " #f74f58";
  //   let bgcolor = "#222";
  //   let text;
  //   let animation_loop;
  //   let redraw_loop;
    
  //   function init() {
  //     ctx.clearRect(0, 0, width, height);
      
  //     ctx.beginPath();
  //     ctx.strokeStyle = bgcolor;
  //     ctx.lineWidth = 30;
  //     ctx.arc(width/2, width/2, 100, 0, Math.PI*2, false);
  //     ctx.stroke();
  //     let radians = degrees * Math.PI / 180;
      
  //     ctx.beginPath();
  //     ctx.strokeStyle = color;
  //     ctx.lineWidth = 30;
  //     ctx.arc(width/2, height/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
  //     ctx.stroke();
  //     ctx.fillStyle = color;
  //     ctx.font = "50px arial";
  //     text = Math.floor(degrees/360*100) + "%";
  //     let text_width = ctx.measureText(text).width;
  //     ctx.fillText(text, width/2 - text_width/2, height/2 + 15);
  //   }
    
  //   function draw() {
  //     if (typeof animation_loop != undefined) clearInterval(animation_loop);
  //     new_degrees = 360;
  //     difference = new_degrees - degrees;
  //     animation_loop = setInterval(animate_to, 3000/difference);
  //   }
    
  //   function animate_to() {
  //     if(degrees == new_degrees) 
  //       clearInterval(animation_loop);
  //     else if(degrees < new_degrees)
  //       degrees++;
  //     else
  //       degrees--;
  //     init();
  //   }
    
  //   draw();
  // },[])

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