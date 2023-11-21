import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Hero2 from '../hero/hero2';
import Lore from '../lore/lore1';
import About from '../about/About';
import Teaser from '../teaser/teaser';
import Roadmap from '../roadmap/Roadmap';
import Faqs from '../faq/Faqs';
import Footer from '../../container/Footer/Footer'
import AnimatedCursor from "react-animated-cursor";
import Loader from '../../components/preloader/preloader';
// import { Lines } from 'react-preloaders';
import '../home/home.css'
const Home = () => {
  // const [loading, setLoading] = useState(false);
  const [allMediaLoaded, setAllMediaLoaded] = useState(false);
  const [refData, setRefData] = useState('')
  const [isTab, setIsTab] = useState(window.innerWidth >= 800);

  const hero = useRef(null);
  const lore = useRef(null);
  const about = useRef(null);
  const roadmap = useRef(null);
  const faqs = useRef(null);
  

  const handleSkip = () => {
    // setLoading(false);
    // console.log("skipp");
  };

  // useEffect(() => {
   
    // setTimeout(() => {
      
    //   }, 2000);
      // setLoading(!loading);

  // }, [loading]);

  useEffect(() => {
    const myElement = document.documentElement
    // myElement.style.overflow = 'hidden';

    const handleLoad = () => {
      // Your code to run once after all content is loaded
      console.log('All content is loaded.');
      setAllMediaLoaded(true)
      myElement.style.overflow = '';
    };

    // Attach the load event listener to the window
    window.addEventListener('load', handleLoad);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [setAllMediaLoaded]);



  const scrollToSection = (sectionName) => {
  // Determine the corresponding ref based on the sectionName
 
  let sectionRef;
  switch (sectionName) {
    case "hero":
      sectionRef = hero;
      break;
      // console.log("hero");
    case "lore":
      sectionRef = lore;
      break;
    case "about":
      sectionRef = about;
      break;
    case "roadmap":
      sectionRef = roadmap;
      break;
    case "faqs":
      sectionRef = faqs;
      break;
    default:
      // Handle cases where the sectionName doesn't match any section
      sectionRef = hero;
      return;
  }
  
  if (sectionRef && sectionRef.current) {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  }
}
 
  return (
    <>
           <AnimatedCursor
        innerSize={14}
        outerSize={15}
        color="238, 78, 78"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
      />
      <>
        <Navbar scrollToSection={scrollToSection} />
          {/* {!allMediaLoaded && <Loader/>} */}
          <section ref={hero} >
           <Hero  /> 
           
          </section>
          
          <section ref={lore}>
          <Lore />
          </section>
          {
            isTab ? '': <section><Teaser /></section>
          }
          

          <section ref={about}>
            <About />
          </section>
          
          <section ref={roadmap}>
            <Roadmap />
          </section>
          
          <section ref={faqs}>
            <Faqs />
          </section>
        <Footer/>
        </> 
      
    </>
  )
}

export default Home