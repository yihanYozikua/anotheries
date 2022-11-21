import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';

import { images } from '../image_compress.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import ProgressiveImg from '../ProgressiveImg'
import topGalleryCanvas from '../css/top_gallery_canvas.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useImagePreload } from '@1px.one/react-hooks';
import $ from 'jquery';

import AOS from 'aos';

function make_img(context, img_div, img_source, x, y, dWidth, dHeight){
  // const img_frame = new Image();
  // img_frame.src = img_;
  // img_frame.onload = function(){
  //   context.drawImage(img_frame, x, y, dWidth, dHeight);
  // }
  img_div.addEventListener('load', (e) => {
    context.drawImage(img_source, x, y, dWidth, dHeight);
  });
}

const Canvas = ({bg_color}) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const img_load = document.getElementById('source');

    context.beginPath();
    context.fillStyle = bg_color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    img_load.addEventListener("load", (e) => {
      context.drawImage(img_load, 0, 0, 60, 60);
    });
  }, [])
  
  return (
    <>
      <canvas ref={canvasRef} style={{width: '100vw'}}/>
      <div style={{display: "none"}}>
        <img id="source" src={images[0]} width="348" height="348"></img>
      </div>
    </>
  )
}


export default Canvas