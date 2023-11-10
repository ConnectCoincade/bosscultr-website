import { items } from "../../data/constant2";
import React ,{useState, useEffect}from "react";
import { delay, motion } from "framer-motion";
import './about.css';
import { mediaDataObj } from '../../data/constant';
import { Fade} from "react-awesome-reveal";

const Card = ({ setSelected, item }) => {

  const [isHovering,setIsHovering] = useState(false)

  

  // useEffect(() => {
  //   const isInViewport = (element) => {
      
  //     const rect = element.getBoundingClientRect();
  //     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  //     return (
  //         rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
  //     );
  //   }

  //   const handleScroll = () => {
  //     let ele = document.getElementById(item.id)
  //     console.log('ele->', ele);
  //     if(ele != null) {
  //       if(isInViewport(ele)) {
  //         debugger
  //         setIsHovering(true)
  //         item.src = item.urlOnHover
  //         console.log('In view port');
  //       }
  //       else {
  //         item.src = item.url
  //       }
  //     }
      
      
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [setIsHovering]);
 
  return (
    <motion.div className="inline-block w-full mb-4" >
     
     <Fade delay={200}>
      <motion.img
        whileHover={{ transition: { duration: 0.9, ease: "easeInOut", delay: 0.9 } }}
        whileTap={{
          // scale: 2.00,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
        src={isHovering ? item.urlOnHover: item.url}
        className={`image-hover-${item.id}`}
        id={`boss-${item.id}`}
      />
      </Fade>
    </motion.div>
  );
};

export default function List({ setSelected }) {
 
  return (
    <div className=""  >
      <div className='h-1 lg:h-64'></div>
       <h2 className='about-heading text-center'>About Bosses</h2>
       <div className='h-16'></div>
      <div className="list-boss columns-2 md:columns-3 xl:columns-4 gap-4 container flex justify-between flex-col lg:flex-row px-6">
        {items.map((item) => (
          
          <Card key={item.id} setSelected={setSelected} item={item} />
          
        ))}
      </div> 
    </div>
  );
}