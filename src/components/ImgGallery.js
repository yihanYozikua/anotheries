import React, {useEffect, useRef, useState} from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Link } from 'react-router-dom';
import AOS from 'aos';

import ImgGalleryCss from '../css/img_gallery.module.scss'
import { images } from '../image_compress.ts'
import { Stage, Layer, Image, Circle } from 'react-konva';

export default function ImgGallery({bg_color}){
  useEffect(() => {
    document.getElementById(`${ImgGalleryCss.scroll_container}`).scrollLeft = 520;
    
  }, []);

  return(
    <section id={ImgGalleryCss.img_gallery_container} style={{backgroundColor: bg_color}}>
      <div id={ImgGalleryCss.scroll_container}>

        <div id={ImgGalleryCss.large_container}>
          <div id={ImgGalleryCss.container}>
            <span className={ImgGalleryCss.img_row_container}>
              <Link to="/locations/fujousan" className={ImgGalleryCss.img_container}  
                data-aos="fade-in">
                <motion.img src={images[92]} loading="lazy" ></motion.img>
              </Link>
              <Link to="/locations/naraAndHotel" className={ImgGalleryCss.img_container}
                data-aos="fade-in">
                <motion.img src={images[40]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/nintynineisland" className={ImgGalleryCss.img_container}
                data-aos="fade-in">
                <motion.img src={images[29]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/graxglamping" className={ImgGalleryCss.img_container}>
                <motion.img src={images[0]} loading="lazy"></motion.img>
              </Link>
            </span>
            


            <span className={ImgGalleryCss.img_row_container}>
              <Link to="/locations/ine" className={ImgGalleryCss.img_container}>
                <motion.img src={images[75]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/bookAndBedTokyoIkeBuKuRo" className={ImgGalleryCss.img_container}>
                <motion.img src={images[63]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/shiragawa" className={ImgGalleryCss.img_container}>
                <motion.img src={images[70]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/taipeiChildrenAmusementPark" className={ImgGalleryCss.img_container}>
                <motion.img src={images[54]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/theoutpost" className={ImgGalleryCss.img_container}>
                <motion.img src={images[99]} loading="lazy"></motion.img>
              </Link>
            </span>


            <span className={ImgGalleryCss.img_row_container}>
              <Link to="/locations/yokoyama" className={ImgGalleryCss.img_container}>
                <motion.img src={images[15]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/mapleawanda" className={ImgGalleryCss.img_container}>
                <motion.img src={images[73]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/shonan" className={ImgGalleryCss.img_container}>
                <motion.img src={images[8]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/tokyoTower" className={ImgGalleryCss.img_container}>
                <motion.img src={images[16]} loading="lazy"></motion.img>
              </Link>
            </span>


            <span className={ImgGalleryCss.img_row_container}>
              <Link to="/locations/takayama" className={ImgGalleryCss.img_container}>
                <motion.img src={images[50]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/umeda" className={ImgGalleryCss.img_container}>
                <motion.img src={images[90]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/flowertree" className={ImgGalleryCss.img_container}>
                <motion.img src={images[96]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/hokkaido" className={ImgGalleryCss.img_container}>
                <motion.img src={images[93]} loading="lazy"></motion.img>
              </Link>
            </span>


            <span className={ImgGalleryCss.img_row_container}>
              <Link to="/locations/kamogawa" className={ImgGalleryCss.img_container}>
                <motion.img src={images[83]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/fujisan" className={ImgGalleryCss.img_container}>
                <motion.img src={images[86]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/theSideOfTheMountain" className={ImgGalleryCss.img_container}>
                <motion.img src={images[67]} loading="lazy"></motion.img>
              </Link>
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}