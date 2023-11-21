import React from "react";
import './lore.css'
import Plx from "react-plx";

const Lore = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  
  const {Midground,bosses,BackgroundGif,MobileBackground,MobileBosses,MobileMidground} = mediaDataObj

  return (
    <>
    <div className='h-96'></div>
        <h3 className='lore-heading text-center'>LORE</h3>
        <div className='h-30'></div>
    <div className='plx-container'>
      <Plx
        parallaxData={[
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
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: "100vh",
          width: "100%",
          zIndex: 100
        }}
      >
        {/* <img style={{ width: "100%" }} src={bosses} alt="foreground" /> */}
        <picture>
      <source media="(max-width:767px)" srcSet={MobileBosses } alt="foreground"  />
    <img  style={{ width: "100%" }} src={bosses} alt="foreground"  />
    </picture>
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
          left: 1,
          top: "100vh",
          width: "100%"
        }}
      >
        {/* <img style={{ width: "100%" }} src="src\assets\lore-plx-img\Background.gif" alt="background" /> */}
        <picture>
      <source media="(max-width:767px)" style={{ width: "100%" }} srcSet={MobileBackground } alt="background" />
    <img  style={{ width: "100%" }} src={BackgroundGif} alt="background"  />
    </picture>
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
        
        <picture>
      <source media="(max-width:767px)" srcSet={Midground } alt="Goonies" />
    <img  style={{
            width: "100vw"
          }}
          src={Midground}
          alt="Goonies"/>
    </picture>
      </Plx>


    </div>  
   
    </>
  );
};

export default Lore;