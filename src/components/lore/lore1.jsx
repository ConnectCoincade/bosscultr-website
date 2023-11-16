import React, {useEffect, useState,useRef}  from "react";
import { mediaDataObj } from "../../data/constant";
import './lore.css'
import Plx from "react-plx";

const Lore = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const {Midground,bosses,BackgroundGif,MobileBackground,MobileBosses,MobileMidground,BossManRacecadeTeaser} = mediaDataObj

  const videoRef = useRef(null);
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );



  const [plxData1, setplxData1] = useState(
    {
      start: 0,
      end: 800,
      easing: "ease-in",
      properties: [
        {
          startValue: 1.8,
          endValue: 1,
          property: "scale"
        },
        {
          startValue: 600,
          endValue: 0,
          property: "translateY"
        }
      ]
    }
  )

  const triggerAnimation = () => {
    // Update plxData1 when you want to trigger the animation
    if(isMobile){
      setplxData1({
        start: 200,
        end: 700,
        easing: "ease-in",
        properties: [
          {
            startValue: 1.8,
            endValue: 1,
            property: "scale"
          },
          {
            startValue: 600,
            endValue: 0,
            property: "translateY"
          }
        ]
      });
    }
    else{
    setplxData1({
      start: 500,
      end: 1000,
      easing: "ease-in",
      properties: [
        {
          startValue: 1.8,
          endValue: 1,
          property: "scale"
        },
        {
          startValue: 600,
          endValue: 0,
          property: "translateY"
        }
      ]
    });}
  };
 

  useEffect(() =>{
    triggerAnimation()
  },  [])




  return (
    <>
   
    {isMobile ? 
    <div className='plx-container'>
          
      <Plx
      className="mobile-bosses"
    parallaxData={[plxData1]}
    style={{
      position: "absolute",
      left: 0,
      top: "100vh",
      // width: "100%",
      zIndex: 100
    }}
  >
   
<img  style={{ width: "100%" }} src={MobileBosses} alt="foreground"  />

  </Plx>


  <Plx
    className="mobile-background"
    parallaxData={[
      {
        start: 0,
        // start: ".start-element",
        end: 800,
      
      
        properties: [
          {
            startValue: 1.6,
            endValue: 1,
            property: "scale"
          },
          {
            startValue: 150,
            endValue: 0,
            property: "translateY"
          }
        ]
      }
    ]}
    style={{  
      position: "absolute",
      left: 1,
      top: "100vh",
      // width: "100%"
    }}
  >

<img  style={{ width: "100%" }} src={MobileBackground} alt="background"  />

  </Plx>


  
  <Plx
  className="mobile-midground"
    parallaxData={[
      {
        start: 0,
        end: 800,
        properties: [
          {
            startValue: 1.6,
            endValue: 1,
            property: "scale"
          },
          {
            startValue: 150,
            endValue: 0,
            property: "translateY"
          }
        ]
      }
    ]}
    style={{
      position: "absolute",
      left: 0,
      top: "100vh",
      // width: "100%"
    }}
  >
    
<img  style={{
        width: "100vw"
      }}
      src={MobileMidground}
      alt="Goonies"/>

  </Plx>
  
  </div>

    : 
    
    <div className='plx-container'>
          <Plx
            parallaxData={[plxData1]}
            style={{
              position: "absolute",
              left: 0,
              top: "100vh",
              width: "100%",
              zIndex: 100
            }}
          >
           
          
        <img  style={{ width: "100%" }} src={bosses} alt="foreground"  />

          </Plx>


          <Plx
            parallaxData={[
              {
                start: 0,
                // start: ".start-element",
                end: 800,
              
              
                properties: [
                  {
                    startValue: 1.6,
                    endValue: 1,
                    property: "scale"
                  },
                  {
                    startValue: 150,
                    endValue: 0,
                    property: "translateY"
                  }
                ]
              }
            ]}
            style={{  
              position: "absolute",
              left: 1,
              top: "100vh",
              width: "100%"
            }}
          >
           
        <img  style={{ width: "100%" }} src={BackgroundGif} alt="background"  />
        
          </Plx>


          
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 800,
                properties: [
                  {
                    startValue: 1.6,
                    endValue: 1,
                    property: "scale"
                  },
                  {
                    startValue: 150,
                    endValue: 0,
                    property: "translateY"
                  }
                ]
              }
            ]}
            style={{
              position: "absolute",
              left: 0,
              top: "100vh",
              width: "100%"
            }}
          >
           
        <img  style={{
                width: "100vw"
              }}
              src={Midground}
              alt="Goonies"/>
        
          </Plx>
              
          
          
        
    </div>}
    
 
   
    </>
  );
};

export default Lore;