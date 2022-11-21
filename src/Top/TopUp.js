import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../image_compress.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import ProgressiveImg from '../ProgressiveImg'
import topCss from '../css/top_up.module.scss'
import shareCss from '../css/share.module.scss'
import force from '../css/force.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useImagePreload } from '@1px.one/react-hooks';
import ReactDOM from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import AOS from 'aos';
import Navbar from "../components/Navbar";


export default function TopUp(props) {
  const {index, date, location, url} = props;

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);


  // render(){
    return (
      <section id={topCss.topUp}>
        {/* Top Up */}
        <div className={topCss.top_up_container}>
          {/* <div style={{height: '70vh'}}></div> */}
  
          <div className={topCss.top_up_text_container} data-aos="fade-in">
            <div className={topCss.index_container}>
              <span>{index}</span>
            </div>
            <div className={topCss.location_text_container}>
              <span>{date}</span>
              <span>{location}</span>
            </div>
            <div className={topCss.view_more_button_container}>
              <a variant="outline-secondary" href={ url } className={topCss.view_more_button_prop}>View more</a>{' '}
            </div>
          </div>
          
          <div className={topCss.scroll_container}>
            <span className={topCss.scroll_prop}>Scroll</span>
            <span><MdKeyboardArrowDown/></span>
          </div>
        </div>
      </section>
    );
  // }
  
}

