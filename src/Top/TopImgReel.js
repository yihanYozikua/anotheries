import {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";
import {Link} from 'react-router-dom';

import {images} from '../image_compress.ts'
import topImgCss from '../css/top_img_reel.module.scss'
import topGalleryCanvasCss from '../css/top_gallery_canvas.module.scss'
import force from '../css/force.module.scss';
import $ from 'jquery';

export default function TopImgReel(props) {
  const imgArr = [images[92], images[93], images[83], images[0], images[67], images[90], images[70], images[99],
                  images[15], images[73]]

  // =============== Manual Scroll Controller ===================
  const ref = useRef(null);
  const {scrollXProgress} = useScroll({container: ref});

  const [indexListener, setIndex] = useState("01");
  const [dateListener, setDate] = useState("2022.03");
  const [locationListener, setLocation] = useState("Hsinchu, Taiwan");

  // =============== infinite scroll ===============
  useEffect(() => {
    $(`#${topImgCss.topScroll}`).on('scroll', function (event) {
      // BUG: don't select use className__hash, it may auto change in future build. Use useRef instead.
      var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
      // console.log(factor);
      if (factor < 0.2) {
        var move = $(this.lastChild);
        move.remove();
        $(this).prepend(move);
        this.scrollLeft += move.width();
      } else if (factor > 0.8) {
        var move = $(this.firstChild);
        move.remove();
        $(this).append(move);

        this.scrollLeft -= move.width();
      }
    });
  }, [])

  // =============== drop animation ===============
  const [animateListener, setAnimate] = useState(topImgCss.top_up_gallery_container);
  const [animListenerImg1, setAnimImg1] = useState(force.top_up_gallery_img_1);
  const [animListenerImg2, setAnimImg2] = useState(force.top_up_gallery_img_2);
  const [animListenerImg3, setAnimImg3] = useState(force.top_up_gallery_img_3);
  const [animListenerImg4, setAnimImg4] = useState(force.top_up_gallery_img_4);
  const [animListenerImg5, setAnimImg5] = useState(force.top_up_gallery_img_5);
  const [animListenerImg6, setAnimImg6] = useState(force.top_up_gallery_img_6);
  const [animListenerImg7, setAnimImg7] = useState(force.top_up_gallery_img_7);
  const [animListenerImg8, setAnimImg8] = useState(force.top_up_gallery_img_8);
  const [animListenerImg9, setAnimImg9] = useState(force.top_up_gallery_img_9);
  const [animListenerImg10, setAnimImg10] = useState(force.top_up_gallery_img_10);
  const [transitionListenerImg1, setTransitionImg1] = useState();
  const [transitionListenerImg2, setTransitionImg2] = useState();
  const [transitionListenerImg3, setTransitionImg3] = useState();
  const [transitionListenerImg4, setTransitionImg4] = useState();
  const [transitionListenerImg5, setTransitionImg5] = useState();
  const [transitionListenerImg6, setTransitionImg6] = useState();
  const [transitionListenerImg7, setTransitionImg7] = useState();
  const [transitionListenerImg8, setTransitionImg8] = useState();
  const [transitionListenerImg9, setTransitionImg9] = useState();
  const [transitionListenerImg10, setTransitionImg10] = useState();
  const listenScrollEvent = event => {
    if (window.scrollY > 200) {
      if (window.scrollY > 1000) {
        setAnimate(topImgCss.top_up_gallery_container_animate_lock);
        setAnimImg1(force.top_up_gallery_img_1_drop_bottom);
        setAnimImg2(force.top_up_gallery_img_2_drop_bottom);
        setAnimImg3(force.top_up_gallery_img_3_drop_bottom);
        setAnimImg4(force.top_up_gallery_img_4_drop_bottom);
        setAnimImg5(force.top_up_gallery_img_5_drop_bottom);
        setAnimImg6(force.top_up_gallery_img_6_drop_bottom);
        setAnimImg7(force.top_up_gallery_img_7_drop_bottom);
        setAnimImg8(force.top_up_gallery_img_8_drop_bottom);
        setAnimImg9(force.top_up_gallery_img_9_drop_bottom);
        setAnimImg10(force.top_up_gallery_img_10_drop_bottom);

        setTimeout(() => {
          document.getElementById("img_reel_1").style.opacity = "0";
          document.getElementById("img_reel_2").style.opacity = "0";
          document.getElementById("img_reel_3").style.opacity = "0";
          document.getElementById("img_reel_4").style.opacity = "0";
          document.getElementById("img_reel_5").style.opacity = "0";
          document.getElementById("img_reel_6").style.opacity = "0";
          document.getElementById("img_reel_7").style.opacity = "0";
          document.getElementById("img_reel_8").style.opacity = "0";
          document.getElementById("img_reel_9").style.opacity = "0";
          document.getElementById("img_reel_10").style.opacity = "0";
        }, 800);
        setTimeout(() => {
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[0].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[0].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[3].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[3].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[3].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[0].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[0].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[3].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[4].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[1].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[3].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[1].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[1].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[2].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[1].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[4].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[2].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[1].style.opacity = "1";
          document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[2].getElementsByClassName(
            `${topGalleryCanvasCss.img_container}`)[2].style.opacity = "1";
        }, 1500);
      } else {
        setAnimate(topImgCss.top_up_gallery_container_animate_drop);
        setAnimImg1(force.top_up_gallery_img_1_drop_middle);
        setAnimImg2(force.top_up_gallery_img_2_drop_middle);
        setAnimImg3(force.top_up_gallery_img_3_drop_middle);
        setAnimImg4(force.top_up_gallery_img_4_drop_middle);
        setAnimImg5(force.top_up_gallery_img_5_drop_middle);
        setAnimImg6(force.top_up_gallery_img_6_drop_middle);
        setAnimImg7(force.top_up_gallery_img_7_drop_middle);
        setAnimImg8(force.top_up_gallery_img_8_drop_middle);
        setAnimImg9(force.top_up_gallery_img_9_drop_middle);
        setAnimImg10(force.top_up_gallery_img_10_drop_middle);
        document.getElementById("img_reel_1").style.opacity = ".2";
        document.getElementById("img_reel_2").style.opacity = ".2";
        document.getElementById("img_reel_3").style.opacity = ".2";
        document.getElementById("img_reel_4").style.opacity = ".2";
        document.getElementById("img_reel_5").style.opacity = ".2";
        document.getElementById("img_reel_6").style.opacity = ".2";
        document.getElementById("img_reel_7").style.opacity = ".2";
        document.getElementById("img_reel_8").style.opacity = ".2";
        document.getElementById("img_reel_9").style.opacity = ".2";
        document.getElementById("img_reel_10").style.opacity = ".2";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[0].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[0].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[3].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[3].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[3].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[0].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[0].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[3].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[4].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[1].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[3].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[1].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[1].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[2].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[1].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[4].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[2].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[1].style.opacity = "0";
        document.getElementsByClassName(`${topGalleryCanvasCss.img_row_container}`)[2].getElementsByClassName(
          `${topGalleryCanvasCss.img_container}`)[2].style.opacity = "0";
      }
    } else if (window.scrollY < 200) {
      setAnimate(topImgCss.top_up_gallery_container);
      setAnimImg1(force.top_up_gallery_img_1);
      setAnimImg2(force.top_up_gallery_img_2);
      setAnimImg3(force.top_up_gallery_img_3);
      setAnimImg4(force.top_up_gallery_img_4);
      setAnimImg5(force.top_up_gallery_img_5);
      setAnimImg6(force.top_up_gallery_img_6);
      setAnimImg7(force.top_up_gallery_img_7);
      setAnimImg8(force.top_up_gallery_img_8);
      setAnimImg9(force.top_up_gallery_img_9);
      setAnimImg10(force.top_up_gallery_img_10);
      document.getElementById("img_reel_1").style.opacity = "1";
      document.getElementById("img_reel_2").style.opacity = "1";
      document.getElementById("img_reel_3").style.opacity = "1";
      document.getElementById("img_reel_4").style.opacity = "1";
      document.getElementById("img_reel_5").style.opacity = "1";
      document.getElementById("img_reel_6").style.opacity = "1";
      document.getElementById("img_reel_7").style.opacity = "1";
      document.getElementById("img_reel_8").style.opacity = "1";
      document.getElementById("img_reel_9").style.opacity = "1";
      document.getElementById("img_reel_10").style.opacity = "1";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);

  }, []);

  const {imgReel, imgReelCntIndex, handleChangeImgReelCntIdx} = props;
  const IMG_REEL_LIST = []

  function isCenter(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();
    console.log(bounding.width);

    if (
      (bounding.left >= 0 && bounding.right >= 0 &&
       bounding.left <=
       (window.innerWidth / 2 + bounding.width / 2 || document.documentElement.clientWidth / 2 +
        bounding.width / 2) &&
       bounding.left >=
       (window.innerWidth / 2 - bounding.width / 2 || document.documentElement.clientWidth / 2 -
        bounding.width / 2))
    ) {
      console.log(element);
      return true;
    } else {
      console.log(`Not in the center. :(`);
      return false;
    }
  }

  useEffect(() => {

    handleChangeImgReelCntIdx(2);

    document.getElementById(`${topImgCss.topScroll}`).addEventListener('scroll', function () {
      handleChangeImgReelCntIdx(2);
      if (
        isCenter(document.getElementById('img_reel_1'))
      ) {
        handleChangeImgReelCntIdx(0);
      } else if (isCenter(document.getElementById('img_reel_2'))) {
        handleChangeImgReelCntIdx(1);
      } else if (isCenter(document.getElementById('img_reel_3'))) {
        handleChangeImgReelCntIdx(2);
      } else if (isCenter(document.getElementById('img_reel_4'))) {
        handleChangeImgReelCntIdx(3);
      } else if (isCenter(document.getElementById('img_reel_5'))) {
        handleChangeImgReelCntIdx(4);
      } else if (isCenter(document.getElementById('img_reel_6'))) {
        handleChangeImgReelCntIdx(5);
      } else if (isCenter(document.getElementById('img_reel_7'))) {
        handleChangeImgReelCntIdx(6);
      } else if (isCenter(document.getElementById('img_reel_8'))) {
        handleChangeImgReelCntIdx(7);
      } else if (isCenter(document.getElementById('img_reel_9'))) {
        handleChangeImgReelCntIdx(8);
      } else if (isCenter(document.getElementById('img_reel_10'))) {
        handleChangeImgReelCntIdx(9);
      }
    });
  }, []);

  useEffect(() => {
    document.getElementById(`${topImgCss.topScroll}`).scrollLeft = 83;
  }, []);

  const imgReelInfo = [
    {
      img: images[92],
      location: 'Taipei',
      date: '2021.11',
      index: '119',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/fujousan'
    },
    {
      img: images[93],
      location: 'Hokkaido',
      date: '2020.02',
      index: '001',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/hokkaido'
    },
    {
      img: images[83],
      location: 'Kyoto',
      date: '2020.03',
      index: '046',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/kamogawa'
    },
    {
      img: images[0],
      location: 'Kyoto',
      date: '2020.02',
      index: '214',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/graxglamping'
    },
    {
      img: images[67],
      location: 'Hsinchu',
      date: '2022.03',
      index: '237',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/theSideOfTheMountain'
    },
    {
      img: images[90],
      location: 'Osaka',
      date: '2022.05',
      index: '423',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/umeda'
    },
    {
      img: images[70],
      location: 'Tokyo',
      date: '2020.03',
      index: '321',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/shiragawa'
    },
    {
      img: images[99],
      location: 'Singapore',
      date: '2022.09',
      index: '???',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/theoutpost'
    },
    {
      img: images[15],
      location: 'Mie',
      date: '2019.12',
      index: '202',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/yokoyama'
    },
    {
      img: images[73],
      location: 'Nantou',
      date: '2021.12',
      index: '112',
      url: 'https://yihanyozikua.github.io/anotheries/#/locations/mapleawanda'
    },
    {img: "", location: 'Start scrolling to enjoy the gallery!', date: 'today', index: '000'}
  ]

  // ================ Render ==================
  return (
    <>
      {/* <LoadingPage /> */}
      <section id={topImgCss.topImgReel}>
        <motion.div id={topImgCss.topScroll} className={animateListener} ref={ref}
        >
          <Link to={"./Locations/Fujousan"}>
            <motion.img
              src={imgArr[0]}
              className={animListenerImg1}
              loading="lazy"
              transition={transitionListenerImg1}
              id="img_reel_1"
              style={{
                width: '16.97rem',
                height: '16.97rem'
              }}
            />
          </Link>
          <Link to={"./locations/hokkaido"}>
            <motion.img
              src={imgArr[1]}
              loading="lazy"
              className={animListenerImg2}
              transition={transitionListenerImg2}
              id="img_reel_2"
            />
          </Link>

          <Link to={"./locations/kamogawa"}>
            <motion.img
              src={imgArr[2]}
              loading="lazy"
              className={animListenerImg3}
              transition={transitionListenerImg3}
              id="img_reel_3"
            />
          </Link>

          <Link to={"./locations/graxglamping"}>
            <motion.img
              src={imgArr[3]}
              loading="lazy"
              className={animListenerImg4}
              transition={transitionListenerImg4}
              id="img_reel_4"
            />
          </Link>

          <Link to={"./locations/theSideOfTheMountain"}>
            <motion.img
              src={imgArr[4]}
              loading="lazy"
              className={animListenerImg5}
              transition={transitionListenerImg5}
              id="img_reel_5"
            />
          </Link>

          <Link to={"./locations/umeda"}>
            <motion.img
              src={imgArr[5]}
              loading="lazy"
              className={animListenerImg6}
              transition={transitionListenerImg6}
              id="img_reel_6"
            />
          </Link>

          <Link to={"./locations/shiragawa"}>
            <motion.img
              src={imgArr[6]}
              loading="lazy"
              className={animListenerImg7}
              transition={transitionListenerImg7}
              id="img_reel_7"
            />
          </Link>

          <Link to={"./locations/theoutpost"}>
            <motion.img
              src={imgArr[7]}
              loading="lazy"
              className={animListenerImg8}
              transition={transitionListenerImg8}
              id="img_reel_8"
            />
          </Link>

          <Link to={"./locations/yokoyama"}>
            <motion.img
              src={imgArr[8]}
              loading="lazy"
              className={animListenerImg9}
              transition={transitionListenerImg9}
              id="img_reel_9"
            />
          </Link>

          <Link to={"./locations/mapleawanda"}>
            <motion.img
              src={imgArr[9]}
              loading="lazy"
              className={animListenerImg10}
              transition={transitionListenerImg10}
              id="img_reel_10"
            />
          </Link>
        </motion.div>
      </section>
    </>

  );
}