import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from '../image_data.ts'
import { images } from '../image_compress.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import topGalleryCanvasCss from '../css/top_gallery_canvas.module.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function TopGalleryArbitrary({bg_color, showOrNot}){
  useEffect(() => {
    document.getElementById(`${topGalleryCanvasCss.scroll_container}`).scrollLeft = 520;
    
  }, []);
  return(
    <section id={topGalleryCanvasCss.top_gallery_container} style={{backgroundColor: bg_color}}>
      <div id={topGalleryCanvasCss.scroll_container}>
        <div id={topGalleryCanvasCss.large_container}>
          <div id={topGalleryCanvasCss.container}>
            <span className={topGalleryCanvasCss.img_row_container}>
              <Link to="/locations/fujousan" className={topGalleryCanvasCss.img_container}  
                data-aos="fade-in">
                <motion.img src={images[92]} loading="lazy" ></motion.img>
              </Link>
              <Link to="/locations/naraAndHotel" className={topGalleryCanvasCss.img_container}
                data-aos="fade-in">
                <motion.img src={images[40]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/nintynineisland" className={topGalleryCanvasCss.img_container}
                data-aos="fade-in">
                <motion.img src={images[29]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/graxglamping" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[0]} loading="lazy"></motion.img>
              </Link>
            </span>
            


            <span className={topGalleryCanvasCss.img_row_container}>
              <Link to="/locations/ine" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[75]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/bookAndBedTokyoIkeBuKuRo" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[63]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/shiragawa" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[70]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/taipeiChildrenAmusementPark" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[54]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/theoutpost" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[99]} loading="lazy"></motion.img>
              </Link>
            </span>


            <span className={topGalleryCanvasCss.img_row_container}>
              <Link to="/locations/yokoyama" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[15]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/mapleawanda" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[73]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/shonan" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[8]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/tokyoTower" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[16]} loading="lazy"></motion.img>
              </Link>
            </span>


            <span className={topGalleryCanvasCss.img_row_container}>
              <Link to="/locations/takayama" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[50]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/umeda" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[90]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/flowertree" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[96]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/hokkaido" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[93]} loading="lazy"></motion.img>
              </Link>
            </span>


            <span className={topGalleryCanvasCss.img_row_container}>
              <Link to="/locations/kamogawa" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[83]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/fujisan" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[86]} loading="lazy"></motion.img>
              </Link>
              <Link to="/locations/theSideOfTheMountain" className={topGalleryCanvasCss.img_container}>
                <motion.img src={images[67]} loading="lazy"></motion.img>
              </Link>
            </span>

          </div>
        </div>
      </div>
      {/* <div className={topGalleryArbitraryCss.gallery_container}
        data-aos="fade-in"
      >
        <Link to="/locations/fujousan" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[92]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/naraAndHotel" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[40]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/nintynineisland" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[29]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/graxglamping" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[0]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
      </div>
      
      <div className={topGalleryArbitraryCss.gallery_container} 
        // data-aos="fade-in"
      >
        <Link to="/locations/ine" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[75]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/bookAndBedTokyoIkeBuKuRo" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[63]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/shiragawa" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[70]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/taipeiChildrenAmusementPark" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[54]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[99]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
      </div>
      
      <div className={topGalleryArbitraryCss.gallery_container} 
        // data-aos="fade-in"
      >
        <Link to="/locations/takayama" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[50]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/yokoyama" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[15]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/mapleawanda" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[73]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/shonan" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[8]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/tokyoTower" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[16]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
      </div>
      
      <div className={topGalleryArbitraryCss.gallery_container} 
        // data-aos="fade-in"
      >
        <Link to="/locations/kamogawa" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[83]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/umeda" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[90]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[96]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/hokkaido" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[93]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
      </div>
      
      <div className={topGalleryArbitraryCss.gallery_container} 
        // data-aos="fade-in"
      >
        <Link to="/locations/fujisan" className={topGalleryArbitraryCss.gallery_img}>
          <motion.img src={images[86]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
        <Link to="/locations/theSideOfTheMountain" className={topGalleryArbitraryCss.gallery_img} style={{opacity: showOrNot}}>
          <motion.img src={images[67]} style={{width: "100%", height: "100%", objectFit: "cover"}} loading="lazy"></motion.img>
        </Link>
      </div> */}
    </section>
  );
}

export default TopGalleryArbitrary;