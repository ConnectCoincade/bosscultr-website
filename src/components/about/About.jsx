import React,{useState, useEffect} from 'react';
import Modal from './Modal';
import List from './List';
import {items} from "../../data/constant2"

const About = () => {
  const [selected, setSelected] = useState(null);
  const [isHovering,setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const isInViewport = (element) => {
      
      const rect = element.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      return (
          rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
      );
    }

    const handleScroll = () => {

      // console.log('items->', items);
        let ele1 = document.getElementById('boss-1')
        let ele2 = document.getElementById('boss-2')
        let ele3 = document.getElementById('boss-3')

        if(isMobile) {
          if(isInViewport(ele1)) {
            // console.log('In view port if->', ele1.id);
            ele1.src = items[0].urlOnHover
          }
          else {
            ele1.src = items[0].url
            // console.log('In view port ele->', ele1.id);
          }
  
          if(isInViewport(ele2)) {
            // console.log('In view port if->', ele2.id);
            ele2.src = items[1].urlOnHover
          }
          else {
            ele2.src = items[1].url
            // console.log('In view port ele->', ele2.id);
          }
  
          if(isInViewport(ele3)) {
            // console.log('In view port if->', ele3.id);
            ele3.src = items[2].urlOnHover
          }
          else {
            ele3.src = items[2].url
            // console.log('In view port ele->', ele3.id);
          }
        }
        
      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsHovering]);

  return (
    <div>
       <List setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default About