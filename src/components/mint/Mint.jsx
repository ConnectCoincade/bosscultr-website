import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import './mint.css';
import BossMan from '../../assets/Bossman logo.png';
import { boss_url } from '../../data/constant3';
import { Fade } from 'react-awesome-reveal';
import Timee from '../mint/Timer';

function Mint() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isTabAndMobile, setIsTabAndMobile] = useState(false)
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fading out the previous image
      setOpacity(0);

      // Change the image after a short delay
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === boss_url.length - 1 ? 0 : prevIndex + 1));
        // Start fading in the new image
        setOpacity(1);

      }, 500);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once on mount


  useEffect(() =>{
    const handleResize = () => {
      setIsTabAndMobile(window.innerWidth <= 800)
    } 

    handleResize()

    window.addEventListener('resize', handleResize)

    return() =>{
      window.addEventListener('resize' , handleResize)
    }
  }, [])


  const currentImage = boss_url[currentImageIndex];

  return (
    <div className= {`image-container${isTabAndMobile ? 'mobile' : ''}`}>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='background-image'>
        <img
          src={currentImage.src}
          alt='bgimg'
          className='bgimg'
          style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}
        />
      </div>
      <Fade
        key={currentImage.src}
        triggerOnce
        delay={200}
        duration={800}
        fraction={0.5}
        fadeOut
        triggerOnceOut
        delayOut={600}
        fadeOutDuration={600}
      >
        <img
          src={currentImage.src}
          alt='Top Image'
          className='top-image'
          style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}
        />
      </Fade>
      <img src={BossMan} alt='Right image' className='right-image' />
      <span className='titlec'>
        <h2>By Coincade Studios</h2>
      </span>
      <span className='para'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero autem laudantium magnam voluptatem labore, error
        facilis. Fugit excepturi delectus totam nihil nisi quae, facilis repellendus, explicabo ducimus aliquam dolores
        nemo?
      </span>
      <div className='parent'>
        <div className='child'>
          <h3>Collection Size</h3>
          <span className='sub1'>6969</span>
        </div>
        <div className='child1'>
          <h3>Max Mints</h3>
          <span className='sub1'>69</span>
        </div>
        <div className='child2'>
          <h3>Token Type</h3>
          <span className='sub1 sub2'>ERC-721</span>
        </div>
        <div className='child3'>
          <h3>BlockChain</h3>
          <span className='sub1'>E7H</span>
        </div>
      </div>
      <div className='timer'>
        <Timee />
      </div>

    
    
      <div className='counterbtn'>
        {/* <button onClick={decreaseQuantity}>-</button>
        <span className='counter'>{quantity}</span>
        <button onClick={increaseQuantity}>+</button> */}
     
      </div>
     
      {/* <button className='mintbtn'>MINT NOW!</button> */}
    </div>
  );
}

export default Mint;
