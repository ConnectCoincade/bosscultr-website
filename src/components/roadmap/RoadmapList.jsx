
import React ,{useState, useEffect, useRef}from "react";
import { mediaDataObj } from '../../data/constant';
import { cardItems } from "../../data/constant2";
import './roadmap.css';
import { Fade } from "react-awesome-reveal";
import small_cards from '../../assets/small_cards.png'
let storedItem = {}
let cardBool = false


const Card = ({ setSelect, item, key,open, setOpen, selectedCard,setSelectedCard}) => {

  const { lock, cardBackLock} = mediaDataObj 
  const [isHovering,setIsHovering] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    // console.log(selectedCard,item);
          // // if (selectedCard !== item) {
          // //   console.log("da-1");
          // //   setSelectedCard(null);
          // //     // setTimeout(()=>{  
             
          // //     // card.style.transform = `translateX(0%)`;
          // //     // card.style.transition = "all 2s ease-out";
          // //     // card.style.display = "block";
          // //   // },50);
          // //   // setOpen(false);
          // // } else {
          // //   console.log("da-2");
          // //   setSelectedCard(item);
          // // }

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      return (
          rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
      );
    }
  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    const handleScroll = () => {
      if(isMobile) {
        const flip_card = document.getElementById('1')
        if(isInViewport(flip_card)) {

          document.querySelector(".card-1 .face-1.front-1").style.transform = "rotateY(180deg)";
          document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(180deg)";
          document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(360deg)";

        }
        else {
          document.querySelector(".card-1 .face-1.front-1").style.transform = "rotateY(360deg)";
          document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(360deg)";
          document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(180deg)";
        }
      }
      
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCardClick = (selectedCard) => {
    storedItem = selectedCard
    console.log('selectedCard->',selectedCard);
   
    if(window.innerWidth <= 800 && !open) {
      document.getElementById('faq-section').classList.add("faq-top-margin");
    }
    else {
      document.getElementById('faq-section').classList.remove("faq-top-margin");
    }
    if(window.innerWidth <= 576 && open) {
   
      document.querySelector(".card-1 .face-1.front-1").style.transform = "rotateY(360deg)";
      document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(360deg)";
      document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(180deg)";
    }
    else if(window.innerWidth <= 576 && !open){
      document.querySelector(".card-1 .face-1.front-1").style.transform = "rotateY(180deg)";
      document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(180deg)";
      document.querySelector(".card-1 .face-1.back-1").style.transform = "rotateY(360deg)";
    }



    const selectedIndex = cardItems.findIndex((item) => item.id === selectedCard.id);
    if(!selectedCard.lock){
      
      const translateXValue = "0px";
     
      cardItems.forEach((item, index) => {
        if (index !== selectedIndex) {
          const card = document.getElementById(item.id);
        
          if (card && !open) {

              if(isMobile){
                card.style.display = "block";
              }
              // console.log("Here 1");
              card.style.transform = `translateX(${translateXValue})`;
              card.style.transition = "all 2s ease-out";
              setTimeout(()=>{  
                card.style.display = "none"
              },100);
              setOpen(true);
            
          }else{
            // console.log("Here 2");
            setTimeout(()=>{  
              card.style.transform = `translateX(0%)`;
              card.style.transition = "all 2s ease-out";
              card.style.display = "block";
            },200);
            setOpen(false);
          }
        }
      });
         !open  ? setSelectedCard(item) : setSelectedCard(null);
    }
    
  };

  return (
    <>
    <Fade direction="up">
      <div   
      key={key} id={item.id}
      className={`card card-${item.id} cursor-pointer ${selectedCard === item ? 'selected' : ''}`}
      onClick = {()=>handleCardClick(item)}
      onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
      >
    
   
    <div  className={`face front face-${item.id} front-${item.id} `}>
    <img className={`card card-${item.id}`} src={item.url} alt='card' />
    </div>
    
    <div className={`face back face-${item.id} back-${item.id}`}>
    <picture>
      <source media="(max-width:767px)" onClick={() => { setSelect(item)}}  className={`card card-${item.id}`} id={`img-${item.id}`}  srcSet={item.cardForMobile } alt="card" />
    <img  onClick={() => { setSelect(item)}}  className={`card card-${item.id}`} id={`img-${item.id}`}  src={item.urlOnHover} alt='' />
    {/* <img
    srcset={`${item.cardForMobile} 48w, ${item.urlOnHover} 1w`}
  sizes="(max-width: 767px) 480px,
         800px"
  onClick={() => { setSelect(item)}}  className={`card card-${item.id}`} id={`img-${item.id}`}  src={item.urlOnHover} alt=''       
  /> */}
    </picture>
    </div>
    
    {selectedCard && (
      <Fade direction="right">
        { isMobile ? 
         "" :
       ( <div className="details shadow-2xl shadow-red-600 p-5 faq-top-margin">
          
          <h2 className='details-heading text-xl md:text-3xl font-bold py-5 text-cream-600'>{selectedCard.title}</h2>
          <p className='details-des text-sm md:text-lg text-cream-600' dangerouslySetInnerHTML={{ __html: selectedCard.description }}/>
          
        </div>)
          }
        </Fade>
      )}
      
  </div>
  
</Fade>
</>
  );
};

export default function RoadmapList({ setSelect }) {

    const {table} = mediaDataObj;   
    const [open,setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // return (
  //   <div className="roadmaplist" >
  //       <h3 className='roadmap-heading text-center'>Roadmap</h3>
  //       <div className='h-16'></div>
  //   <div className='relative' >

  //    <div className="hidden md:block" onClick={() => setSelectedCard(null)} > <img className='w-full' src={table} alt="table" /> </div>
      
  //    <div className='sticky image-card flex justify-between flex-col md:flex-row md:absolute'>
        
  //       {cardItems.map((item,index) => (
        
  //         <Card
  //         setSelect={setSelect} 
  //         item={item} 
  //         key={item.id} 
  //         id={index} 
  //         open={open} 
  //         setOpen={setOpen} 
  //         selectedCard={selectedCard}
  //         setSelectedCard={setSelectedCard}
  //         />
          
         
  //       ))}
  //     </div> 
      
  //   </div>
  //   </div>
  // );

  function tableClick() {
    console.log('open->', open);
    console.log('table->', storedItem);
    let selectedCard = storedItem

    if(open) {
      const selectedIndex = cardItems.findIndex((item) => item.id === selectedCard.id);
    if(!selectedCard.lock){
      
      const translateXValue = "0px";
     
      cardItems.forEach((item, index) => {
        if (index !== selectedIndex) {
          const card = document.getElementById(item.id);
        
          if (card && !open) {

              if(isMobile){
                card.style.display = "block";
              }
              // console.log("Here 1");
              card.style.transform = `translateX(${translateXValue})`;
              card.style.transition = "all 2s ease-out";
              setTimeout(()=>{  
                card.style.display = "none"
              },100);
              setOpen(true);
            
          }else{
            // console.log("Here 2");
            setTimeout(()=>{  
              card.style.transform = `translateX(0%)`;
              card.style.transition = "all 2s ease-out";
              card.style.display = "block";
            },200);
            setOpen(false);
          }
        }
      });
         !open  ? setSelectedCard(item) : setSelectedCard(null);
    }
    }
    
    
  }

  return (
    <div className="roadmaplist" >
        <h3 className='roadmap-heading text-center'>Roadmap</h3>
        <div className='h-16'></div>
    <div className='relative' onClick={()=>setOpen(!open)} >

     <div className="hidden md:block" onClick={() => tableClick()} > <img className='w-full' src={table} alt="table" /> </div>
      
     <div className='sticky image-card flex justify-between flex-col md:flex-row md:absolute'>
        
        {cardItems.map((item,index) => (
         (isMobile == false ? <Card
          setSelect={setSelect} 
          item={item} 
          key={item.id} 
          id={index} 
          open={open} 
          setOpen={setOpen} 
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          /> :
          index == 0 ? <Card
          setSelect={setSelect} 
          item={item} 
          key={item.id} 
          id={index} 
          open={open} 
          setOpen={setOpen} 
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          />: 
          index == 1 ? <img className="small-card" src={small_cards}/> : "") 
          
        ))}
      </div> 
      
    </div>
    </div>
  );
}