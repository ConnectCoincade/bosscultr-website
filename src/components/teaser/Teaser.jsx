import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import './teaser.css'
const Teaser = () => {
  const {title,hero, longVideo,bossManV1,bossManMobileV1, BossManRacecadeTeaser} = mediaDataObj;
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isVisible, setIsVisible] = useState(true);
  // const [muteMode, setMuteMode] = useState(
  //   () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  // );
  const [muteMode, setMuteMode] = useState("true")
  const isMute = useRef(true);

  
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
  
  
  // function toggleMute(){
  //   // console.log('triggered', muteMode);
  //   setMuteMode("false");
  //   // console.log('triggered after', muteMode);
  // };

  // useEffect(() => {
    
  //   const isInViewport = (element) => {
  //     const rect = element.getBoundingClientRect();
  //     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  //     return (
  //         rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  //     );
  //   }

    
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 767);
  //   };

    

  //   const handlescroll = () => {
  //     // console.log('scroll');
  //     const video_teaser = document.getElementById('video-teaser')
  //     // console.log('isInViewport(video_teaser)->', isInViewport(video_teaser));
  //     // let isMute = "false"
  //     if (isInViewport(video_teaser)) {
  //       // console.log('Section is in the viewport!');
  //       // setMuteMode(() => {
  //       //   return "false"
  //       // });
  //       isMute.current = false
  //       // console.log('isMute.current----------------------->', isMute.current);
  //       // console.log('muteMode in if->', isMute);
  //     }
  //     else {
  //       // console.log('else');
  //       // setMuteMode(() => {
  //       //   return "true"
  //       // });
  //       isMute.current = true
  //       // console.log('isMute.current----------------------->', isMute.current);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("scroll", handlescroll);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("resize", handlescroll);
  //   };
    

    
  // }, [setMuteMode,setIsMobile, isMute]); // The empty dependency array ensures it only runs once



  // Render the video source based on the isMobile state
  const videoSource = isMobile ? bossManMobileV1 : bossManV1;

  return (
    <>
    <div>
      {isMobile ? '': <div className='w-full'>
        <></>
     <video 
     id='video-teaser'
         loop
         ref={videoRef}
         autoPlay={true}
         muted={true}
         controlsList="nodownload"
         playsInline={true}
         disablePictureInPicture={true}
         controls={true}
         className='boss-div'
         >
      <source  src={BossManRacecadeTeaser} type="video/mp4" /> 
     </video>
     {/* <button id='tr-btn' onClick={toggleMute}> click me
      </button> */}
     </div>  }
       
    </div> 
    </>
  );
};

export default Teaser;
