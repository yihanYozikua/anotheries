import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll, useAnimation } from "framer-motion";
import { Button } from 'react-bootstrap';
import { images } from '../image_data.ts'
import topViewLocations from '../css/top_view_locations.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function TopViewLocations({bg_color, marginTopOffset}){
  // =================== Get Window Size =================
  const [ windowSize, setWindowSize ] = useState(getWindowSize());
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // =================== Marquee Animation =================
  const marqueeVariants = {
    animate: {
      x: [0, -windowSize.innerWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return(
    <section id={topViewLocations.top_view_all_locations} style={{backgroundColor: bg_color, marginTop: marginTopOffset}}>
      <Link to="/locations" className={topViewLocations.btn}></Link>
      <motion.div
        className={topViewLocations.track}
        variants={marqueeVariants}
        animate="animate"
      >
        <span className={topViewLocations.text_prop} data-aos="fade-in">View all locations View all locations View all locations View all locations</span>
      </motion.div>
    </section>
  );
}

export default TopViewLocations;