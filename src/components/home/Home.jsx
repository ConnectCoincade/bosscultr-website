import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
// import Hero2 from '../hero/hero2';
import Lore from '../lore/lore1';
import About from '../about/About';
import Teaser from '../teaser/Teaser';
import Roadmap from '../roadmap/Roadmap';
import Faqs from '../faq/Faqs';
import Footer from '../../container/Footer/Footer'
import AnimatedCursor from "react-animated-cursor";
import Loader from '../../container/Loader/Loader';
import '../home/home.css'
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [refData, setRefData] = useState('')

  const hero = useRef(null);
  const lore = useRef(null);
  const about = useRef(null);
  const roadmap = useRef(null);
  const faqs = useRef(null);

  const handleSkip = () => {
    setLoading(false);
    // console.log("skipp");
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      // setLoading(false);
        handleSkip();
      }, 10000);
    }
  }, [loading]);

  const scrollToSection = (sectionName) => {
  // Determine the corresponding ref based on the sectionName
 
  let sectionRef;
  switch (sectionName) {
    case "hero":
      sectionRef = hero;
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
      {loading ? (
        <>
          <Loader />
          <div className="skippdiv">
            <button onClick={handleSkip}>Skip</button>
          </div>
        </>
      ) : (<>
        <Navbar scrollToSection={scrollToSection} />

       
          <section ref={hero} >
           <Hero  /> 
          {/* <Hero2 /> */}
          </section>
          <section>
          <div className="lore-section">
            <h2 className="section-heading">Lore</h2>
          </div>
          </section>
          <section ref={lore}>
          <Lore />
          </section>

          <section>
          <Teaser />
          </section>

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
        </> )}
    </>
  )
}

export default Home