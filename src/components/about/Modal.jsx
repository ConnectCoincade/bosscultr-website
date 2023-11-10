import React,{useEffect,useRef} from "react";
import { motion } from "framer-motion";
import { mediaDataObj } from "../../data/constant";
import { items } from "../../data/constant2";
import './about.css'
export default function Modal({ selected, setSelected }) {

  const {closeButton} = mediaDataObj;

  useEffect(() => {
    if (selected) {
      // Store the current scroll position
      // scrollPositionRef.current = window.scrollY;
      // Prevent body scrolling when the modal is open
      document.body.style.overflow = "hidden";
      
    } else {
      // Restore body scrolling when the modal is closed
      document.body.style.overflow = "auto";
      // document.body.style.position = "relative";
    }
  }, [selected]);
  
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 backdrop-blur-sm bg-black/50 z-20 cursor-pointer overflow-y-scroll "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-details px-0 mx-0 my-0 md:mx-10 md:my-20 md:px-5 flex-col lg:flex-row flex justify-between items-center cursor-default "
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <img className={`image-modal image-modal-${selected.id} max-w-[550px] backdrop-blur-xl p-5 ml-12 rounded-xl`} src={selected.urlOnHover} />
        </motion.div>
        <motion.div
          
          initial={{
            opacity: 0,
            x: 10,
            y:150
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="modal-description w-full sm:p-5 md:p-10 bg-black "
        >
          <div className='modal-des rounded-xl m-4 w-full'>
                    <div className='flex justify-between'>  
                     <h3 className=" text-center modal-des-title md:text-2xl uppercase font-bold text-cream-600 underline decoration-red-600 hover:decoration-gray-400">{selected.title}</h3>  
                     <div> 
                     <img  onClick={() => setSelected(null)}className='closeButton mr-5 cursor-pointer' src={closeButton} alt="closeButton"/>
                     </div>
                     </div>
                     <div className="para">
                    <p className='para-text text-cream-500 font-bold text-lg py-10 '>{selected.description}</p>
                    </div>
                    </div>
        </motion.div>
      </div>
    </div>
  );
}