import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import './hero.css'
const Hero = () => {
  const {bossManV1,bossManMobileV1} = mediaDataObj;
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isVisible, setIsVisible] = useState(true);
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );



  // useEffect(() => {
  //   sessionStorage.setItem("isMute", true);
  //   if (isVisible) {
  //     videoRef.current.play();
  //   } else {
  //     if (videoRef.current.play) {
  //       videoRef.current.pause();
  //     }
  //   }
  // }, [isVisible]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]); // The empty dependency array ensures it only runs once

  // Render the video source based on the isMobile state
  const videoSource = isMobile ? bossManMobileV1 : bossManV1;

  return (
    <>
    <div>
      <div className='w-full'>
        <></>
     <video 
         loop
         ref={videoRef}
         autoPlay={true}
         muted={muteMode}
         controlsList="nodownload"
         playsInline={true}
         disablePictureInPicture={true}
         controls={false}
         className='boss-div'
         >
      <source  src={videoSource} type="video/mp4" /> 
     </video>
     </div>   
    </div>
    </>
  );
};

export default Hero;
