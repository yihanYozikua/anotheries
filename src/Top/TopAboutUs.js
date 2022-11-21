import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { images } from '../image_compress.ts'
import { Button } from 'react-bootstrap';
import topAboutUs from '../css/top_about_us.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function TopAboutUs({bg_color, border_color}){


  const bg_style = {backgroundColor: bg_color};
  const border_style_top = {borderTop: "1px solid #B3B3BE"};
  const border_bottom_style = {borderBottomStyle: "1px dotted"}
  const border_bottom_color = {borderBottomColor: border_color}
  // console.log(border_color)
  return(
    <section id={topAboutUs.top_about_us} style={{...bg_style, ...border_bottom_style, ...border_bottom_color}}>
      <span className={topAboutUs.text_prop} data-aos="fade-in">About us</span>
      <Link to="/about" className={topAboutUs.btn} style={{...border_bottom_style, ...border_bottom_color}}> </Link>
      {/* <span className={topAboutUs.bgImg_prop}></span> */}
    </section>
  );
}

export default TopAboutUs;