import React, { useState, useRef, useEffect } from "react";
import AOS from 'aos';

import bg from './static/compressedImg/temp.png'
import tempCss from './css/temp.module.scss'

export default function TempCover(){
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


  // disable scroll event
  function preventDefault(e) {
    e.preventDefault();
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    console.log('disable scroll');
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  }
  // call this to Enable
  function enableScroll() {
    console.log('enable scroll');
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
  }

  if(isMobile || isPad){
    disableScroll();
  }

  return(
    <div id={tempCss.temp}>
      {/* <img src={bg}></img> */}
      <div className={tempCss.declaration_container}>
        <div className={tempCss.declaration_contents_container}>
          <span className={tempCss.declaration_prop}>ただいま、スマホとタブレットでの構築を調整中です。</span>
          <span className={tempCss.declaration_prop}>お手数をおかけして大変恐れ入りますが、</span>
          <span className={tempCss.declaration_prop}>パソコンにてご覧いただければ幸いです。</span>
        </div>
      </div>
      <img src={bg}></img>
    </div>
  )
}