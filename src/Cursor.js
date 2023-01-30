import React, { useState, useRef, useEffect } from 'react';


import cursorCss from './css/cursor.module.scss'
import force from './css/force.module.scss'
import topGalleryArbitraryCss from './css/top_gallery_arbitrary.module.scss'
import topViewLocations from './css/top_view_locations.module.scss'
import aboutCss from './css/about.module.scss'
import topGetInTouch from './css/top_get_in_touch.module.scss'
import topAboutUs from './css/top_about_us.module.scss'
import ImgGalleryCss from './css/img_gallery.module.scss'
import topGalleryCanvasCss from './css/top_gallery_canvas.module.scss'

import cursorDoubleCircle from './static/cursor/cursor_double_circle_white.svg'
import cursorViewCircle from './static/cursor/cursor_view_circle.svg'
import cursorArrow from './static/cursor/cursor_left_right.svg'
// import { CgArrowsH } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md';
import locationsTypeFiveCss from "./css/locations_type5.module.scss";
import locationsTypeSixCss from "./css/locations_type6.module.scss"

// export default class Cursor extends React.Component{
function Cursor (cursorTypes){
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;
  const isPad = (width > 768) && (width <= 992);

  useEffect(() => {
    console.log(`cursorTypes: ${cursorTypes.cursorTypes}`);
    var cursor = document.getElementById(`${cursorCss.cursor}`);
    var cursorinner = document.getElementById(`${cursorCss.cursor2}`);
    var a = document.querySelectorAll('a');
    document.addEventListener('mousemove', function(e){
      if(!isMobile && !isPad){
        cursor.style.display = 'unset';
        cursorinner.style.display = 'unset';
      }
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    function cursorLeftRight(els, cursorClass, cursorInnerClass){
      [].forEach.call(els, function(el){
        el.addEventListener('mouseover', () => {
          cursor.classList.add(cursorClass);
          cursorinner.classList.add(cursorInnerClass);
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove(cursorClass);
          cursorinner.classList.remove(cursorInnerClass);
        });
      });
    }
    cursorLeftRight(a, `${cursorCss.cursor_hover_a}`, `${cursorCss.cursorinnerhover_a}`);
    cursor.classList.add(`${cursorCss.cursor}`);
    cursorinner.classList.add(`${cursorCss.cursor2}`);

    if(cursorTypes.cursorTypes == "Top"){
      let leftRightArrowCursorClassName = [
        document.getElementsByClassName(`${force.top_up_gallery_img_1}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_2}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_3}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_4}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_5}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_6}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_7}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_8}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_9}`)[0],
        document.getElementsByClassName(`${force.top_up_gallery_img_10}`)[0],
      ]
      cursorLeftRight(leftRightArrowCursorClassName, `${cursorCss.cursor_hover_left_right_arrow}`, `${cursorCss.cursor_hover_inner_left_right_arrow}`);
      
      let viewAllLocations = document.getElementsByClassName(`${topViewLocations.btn}`);
      cursorLeftRight(viewAllLocations, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);

      let aboutPageLayout = document.getElementsByClassName(`${topAboutUs.btn}`);
      cursorLeftRight(aboutPageLayout, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);

      let getInTouchPageLayout = document.getElementsByClassName(`${topGetInTouch.btn}`);
      cursorLeftRight(getInTouchPageLayout, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);

      let galleryTopPage = document.getElementsByClassName(`${topGalleryCanvasCss.img_container}`);
      cursorLeftRight(galleryTopPage, `${cursorCss.cursor_hover_view}`, `${cursorCss.cursor_hover_inner_view}`);
    }
    else if(cursorTypes.cursorTypes == "About"){
      var aboutReel = document.getElementsByClassName(`${aboutCss.gallery_container}`);
      cursorLeftRight(aboutReel, `${cursorCss.cursor_hover_left_right_arrow}`, `${cursorCss.cursor_hover_inner_left_right_arrow}`);

      var getInTouchPageLayout = document.getElementsByClassName(`${topGetInTouch.btn}`);
      cursorLeftRight(getInTouchPageLayout, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);
    }
    else if(cursorTypes.cursorTypes == "Locations"){
      var locationGellery = document.getElementsByClassName(`${topGalleryArbitraryCss.gallery_img}`);
      cursorLeftRight(locationGellery, `${cursorCss.cursor_hover_view}`, `${cursorCss.cursor_hover_inner_view}`);

      let aboutPageLayout = document.getElementsByClassName(`${topAboutUs.btn}`);
      cursorLeftRight(aboutPageLayout, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);

      var getInTouchPageLayout = document.getElementsByClassName(`${topGetInTouch.btn}`);
      cursorLeftRight(getInTouchPageLayout, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);

      var imgGallery = document.getElementsByClassName(`${ImgGalleryCss.img_container}`);
      cursorLeftRight(imgGallery, `${cursorCss.cursor_hover_view}`, `${cursorCss.cursor_hover_inner_view}`);

      var imgReelFive = document.getElementsByClassName(`${locationsTypeFiveCss.img_reel_container}`);
      cursorLeftRight(imgReelFive, `${cursorCss.cursor_hover_left_right_arrow}`, `${cursorCss.cursor_hover_inner_left_right_arrow}`);

      var imgReelSix = document.getElementsByClassName(`${locationsTypeSixCss.img_reel_container}`);
      cursorLeftRight(imgReelSix, `${cursorCss.cursor_hover_left_right_arrow}`, `${cursorCss.cursor_hover_inner_left_right_arrow}`);
    }
    else if(cursorTypes.cursorTypes == "Contact"){
      let viewAllLocations = document.getElementsByClassName(`${topViewLocations.btn}`);
      cursorLeftRight(viewAllLocations, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);

      let aboutPageLayout = document.getElementsByClassName(`${topAboutUs.btn}`);
      cursorLeftRight(aboutPageLayout, `${cursorCss.cursor_hover_click}`, `${cursorCss.cursor_hover_inner_click}`);
    }
    else if(cursorTypes.cursorTypes == "Privacy"){

    }
    else{
      cursor.classList.add(`${cursorCss.cursor}`);
      cursorinner.classList.add(`${cursorCss.cursor2}`);
    }
    
    

  }, [cursorTypes.cursorTypes])

  return(
    <>
      <div id={cursorCss.cursor}></div>
      <div id={cursorCss.cursor2}></div>
    </>
  );
}

export default Cursor;
