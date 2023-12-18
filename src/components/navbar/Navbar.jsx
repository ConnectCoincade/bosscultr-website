import React, { useRef, useState, useEffect } from 'react';
import { mediaDataObj } from '../../data/constant';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import './navbar.css';

const Navbar = (props) => {
  const { Logo } = mediaDataObj;
  const { scrollToSection } = props;
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = () => {
    setOpen(false); // This function will close the mobile menu
  };

  


  let Links = [
    { name: 'lore', nameLink: 'LORE' },
    { name: 'about', nameLink: 'ABOUT' },
    { name: 'roadmap', nameLink: 'ROADMAP' },
    { name: 'faqs', nameLink: 'FAQS' },
  ];

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="navBar shadow-red-500 fixed w-full h-[50px] flex justify-between items-center px-3 bg-[black] z-10"
    >
      <div onClick={scrollToTop}>
        <img
          src={Logo}
          alt="Bosscultr Logo"
          style={{ height: '30px' }}
          className="cursor-pointer"
        />
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
      >
        <ion-icon className="decoration-red-600" name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul
        className={`nav-ul md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open  ? 'top-0 ' : 'top-[-490px]'
        }`}
      >
        {Links.map((link) => (
          <li
            key={link.name} // Make sure to add a unique key for each list item
            className="md:ml-8 text-xl md:my-0 my-7 text-center cursor-pointer font-bold text-white-600 decoration-red-600 hover:text-red-600 hover:decoration-red-500"
            onClick={() => {
              scrollToSection(link.name);
              closeMobileMenu(); 
            }}
          >
            {link.nameLink}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

