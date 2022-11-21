import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import { images } from '../image_data.ts'
import topGetInTouch from '../css/top_get_in_touch.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function TopGetInTouch({bg_color}){

  return(
    <section id={topGetInTouch.top_get_in_touch} style={{backgroundColor: bg_color}}>
      <span className={topGetInTouch.text_prop} data-aos="fade-in">Get in touch</span>
      <Link to="/contact" className={topGetInTouch.btn}> </Link>
    </section>
  );
}

export default TopGetInTouch;