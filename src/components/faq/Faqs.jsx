import React,{useState} from 'react';
import { mediaDataObj } from '../../data/constant';
import './faq.css';
import Accordion from './Accordion';
const Faqs = () => {
  const {faqs} = mediaDataObj;

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      // Clicked on an open FAQ, so close it
      setOpenFaqIndex(null);
    } else {
      // Clicked on a closed FAQ, so open it
      setOpenFaqIndex(index);
    }
  };

  return (
  <>
  <section id='faq-section' className='container'>
  <div>
  <div className='h-16'></div>
    <h3 className='faqs faqs-heading text-center'>FAQS</h3>
    <div className='h-16'></div>
  </div>

    <div>
      {faqs.map((data,index)=>{
        return (
         <Accordion  
         key={index} 
         id={data.id}
         question={data.que} 
         htmlContent={data.htmlContent}
         isOpen={index === openFaqIndex}
         toggleFaq={() => toggleFaq(index)}
         />
          )
      })}
    </div>
    </section>
  </>
  );
};

export default Faqs;
