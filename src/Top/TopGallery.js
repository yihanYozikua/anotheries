import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from '../image_data.ts'
import { images } from '../image_compress.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import ProgressiveImg from '../ProgressiveImg'
import topGallery from '../css/top_gallery.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useImagePreload } from '@1px.one/react-hooks';
import AOS from 'aos';

const GALLERY_IDX_LIST = [
  [15, 3, 54, 25],
  [74, 51, 19, 18],
  [57, 67, 47, 8],
  [70, 83, 88, 34],
  [30, 44, 65, 76],
]

const TopGallery2 = () => {
  return (
    <section id={topGallery.top_gallery}>
      {GALLERY_IDX_LIST.map((nestedIdxList, idx) => (
        <div className={topGallery.gallery_container} key={idx}>
          {nestedIdxList.map((imgIdx) => (
            <motion.img className={topGallery.gallery_img} src={images[imgIdx]} loading="lazy" key={imgIdx}></motion.img>
          ))}
        </div>
      ))}
    </section>
  )
}

function TopGallery(){


// class TopGallery extends React.Component{
  // render(){
  return(
    <section id={topGallery.top_gallery}>
      
      <div className={topGallery.gallery_container} data-aos="fade-in">
        <motion.img className={topGallery.gallery_img} src={images[15]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[3]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[54]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[25]} loading="lazy"></motion.img>
      </div>
      
      <div className={topGallery.gallery_container} data-aos="fade-in">
        <motion.img className={topGallery.gallery_img} src={images[74]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[51]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[19]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[18]} loading="lazy"></motion.img>
      </div>
      
      <div className={topGallery.gallery_container} data-aos="fade-in">
        <motion.img className={topGallery.gallery_img} src={images[57]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[67]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[47]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[8]} loading="lazy"></motion.img>
      </div>
      
      <div className={topGallery.gallery_container} data-aos="fade-in">
        <motion.img className={topGallery.gallery_img} src={images[70]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[83]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[88]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[34]} loading="lazy"></motion.img>
      </div>
      
      <div className={topGallery.gallery_container} data-aos="fade-in">
        <motion.img className={topGallery.gallery_img} src={images[30]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[44]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[65]} loading="lazy"></motion.img>
        <motion.img className={topGallery.gallery_img} src={images[76]} loading="lazy"></motion.img>
      </div>
    </section>
  );
  // }
}

export default TopGallery;