import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';

import './hero2.css'
const Hero = () => {


  useEffect(() => {
    // console.log('window.innerHeight->', window.innerHeight)
    setTimeout(() => {
      // console.log('why');
      // document.getElementById('container-hero-sec').classList.remove("margin-top-hero");
      window.scrollTo(0, 0);
    }, 250);

    setTimeout(() => {
      // console.log('test');
      document.getElementById('boss-char').classList.add("scroll-boss");
      
    }, 1200);


    const handleScroll = event => {
      
      if(window.scrollY >= 300 && window.innerWidth >= 1024) {
        
        document.getElementById('vid-boss').pause()
        document.getElementById('vid-boss').style.display = "none"
        
      }
      else if(window.scrollY >= 200 && (window.innerWidth >= 801 && window.innerWidth <= 1024)) {
       
        document.getElementById('vid-boss').pause()
        document.getElementById('vid-boss').style.display = "none"
        
      }
      else if(window.scrollY >= 20 && window.innerWidth <= 800)  {
          document.getElementById('vid-boss').pause()
          document.getElementById('vid-boss').style.display = "none"
      }
      else {
        document.getElementById('vid-boss').style.display = "block"
        document.getElementById('vid-boss').play()
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <div class="hero-container">
          {/* <img src={light}/> */}

          <video autoPlay muted preload id='vid-boss'>
              <source src={bosslogo} type="video/mp4"/>
          </video>
        
          <img id="boss-char" src={bossChar}/>
        
      </div>
    </>
  );
};

export default Hero;
