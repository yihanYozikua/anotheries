import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { images } from './image_compress.ts'
import Cursor from './Cursor'
import Temp from "./Temp"
import locationsIndexCss from './css/locations_index.module.scss'
import shareCss from './css/share.module.scss'
import topGallery from './css/top_gallery.module.scss'
import LocationPageLayout from "./Template/LocationPageLayout";
import Navbar from "./components/Navbar";
import TopGalleryArbitrary from './Top/TopGalleryArbitrary'
import ImgGallery from "./components/ImgGallery"

function LocationsIndex() {

  // =================== Get Window Size =================
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const location_bg_color = "#F1EEE6";

  return (
    <>
      <Temp />
      <Cursor cursorTypes={"Locations"} />
      <LocationPageLayout hasTopAboutUsBorder>
        <section id={locationsIndexCss.locations}>
          <div className={locationsIndexCss.locations_container}>
            {/* All Locations */}
            <Navbar />
            {/* <TopGalleryArbitrary bg_color={location_bg_color} showOrNot={"1"} /> */}
            <ImgGallery bg_color={location_bg_color}/>

            <div className={locationsIndexCss.auto_scroll_container} data-aos="fade-in">
              <motion.div
                className={locationsIndexCss.track}
                variants={marqueeVariants}
                animate="animate"
              >
                <Link to="/locations" className={locationsIndexCss.gradient_text_prop}>Miss traveling? Miss traveling? Miss traveling? Miss traveling?</Link>
              </motion.div>
            </div>

          </div>
        </section>
      </LocationPageLayout>
    </>
    
  );
}

export default LocationsIndex;
