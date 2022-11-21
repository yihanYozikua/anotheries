import { useState, useRef, useEffect } from "react";
import clsx from 'clsx';
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { images } from '../image_compress.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import ProgressiveImg from '../ProgressiveImg'
import topImgCss from '../css/top_img_reel.module.scss'
import force from '../css/force.module.scss'
import { useImagePreload } from '@1px.one/react-hooks';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AOS from 'aos';

export default function TopImgReel() {
  //   const randomImgReelAll = [images[71], images[15], images[95], images[53], images[93], images[41], images[0], images[76], images[97], images[67], 
  //                           images[77], images[54], images[90], images[20], images[33], images[74], images[87], images[12], images[95], images[0]];

  //   function shuffle(arr) {
  //     var i,
  //         j,
  //         temp;
  //     for (i = arr.length - 1; i > 0; i--) {
  //         j = Math.floor(Math.random() * (i + 1));
  //         temp = arr[i];
  //         arr[i] = arr[j];
  //         arr[j] = temp;
  //     }
  //     return arr;
  // };
  // shuffle(randomImgReelAll);
  // const randomImgReel = randomImgReelAll.slice(0, 10);

  const imgReel = [images[92], images[93], images[83], images[0], images[67], images[90], images[70], images[99], images[15], images[73]]


  // =============== Manual Scroll Controller ===================
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [indexListener, setIndex] = useState("01");
  const [dateListener, setDate] = useState("2022.03");
  const [locationListener, setLocation] = useState("Hsinchu, Taiwan");

  // =============== infinite scroll ===============
  useEffect(() => {
    $(`#${topImgCss.topScroll}`).on('scroll', function(event){
      // BUG: don't select use className__hash, it may auto change in future build. Use useRef instead.
      var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
      // console.log(factor);
      if(factor < 0.2) {
        var move = $(this.lastChild);
        move.remove();
        $(this).prepend(move);
        this.scrollLeft += move.width();
      } else if(factor > 0.8) {
        var move = $(this.firstChild);
        move.remove();
        $(this).append(move);
  
        this.scrollLeft -= move.width();
      }
    });
  }, [])

  // =============== drop animation ===============
  const [isDropMiddle, setIsDropMiddle] = useState(false);
  const [transition, setTransition] = useState({});
  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY > 200) {
        console.log(window.scrollY);
        setIsDropMiddle(true);
        setTransition({ type: "spring", delay: 0, bounce: 0.3 });
      }
      else {
        console.log(window.scrollY);
        setIsDropMiddle(false);
        setTransition({});
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);


  // ================ Render ==================
  return (
    <section id={topImgCss.topImgReel}>
      <motion.div id={topImgCss.topScroll} className={topImgCss.top_up_gallery_container} ref={ref}>
        {[...Array(10)].map((_none, idx) => (
          <motion.img
            key={idx}
            src={imgReel[idx]}
            className={clsx(
              force[`top_up_gallery_img_${idx + 1}`],
              isDropMiddle && force.drop_middle
            )}
            loading="lazy"
            transition={transition}
          />
        ))}
      </motion.div>

    </section>
  );
}
