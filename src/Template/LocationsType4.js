import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import AOS from 'aos';

// import { images } from './image_data.ts'
import { images } from '../image_compress.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import locationsTypeFourCss from '../css/locations_type4.module.scss'
import shareCss from '../css/share.module.scss'
import arrow_left from '../static/arrow/arrow_left_locations.svg'
import arrow_right from '../static/arrow/arrow_right_locations.svg'
import LocationPageLayout from "./LocationPageLayout";
import Navbar from "../components/Navbar";

const LocationsType4 = ({ bannerImg, locationIndex, imgsAll, imgsToShow, title, description, tips, moreAboutThere, coverImg, prevImg, nextImg, prevLink, nextLink }) => {


  const [isHoveringPrev, setIsHoveringPrev] = useState("0");
  const handleMouseOverPrev = () => {
    setIsHoveringPrev("1");
  }
  const handleMouseOutPrev = () => {
    setIsHoveringPrev("0");
  }

  const [isHoveringNext, setIsHoveringNext] = useState("0");
  const handleMouseOverNext = () => {
    setIsHoveringNext("1");
  }
  const handleMouseOutNext = () => {
    setIsHoveringNext("0");
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  /*
    * bannerImg: .jpg or .png, 最上面首圖
    * locationIndex: string, index of the location
    * imgs: array, 要放在頁面上的照片
    * title: string array, 放在index下面的標題
    * description: string array, 放在 title 下面的文字敘述
    * tips: 1D string array, 放在 Little tips 下面
    * moreAboutThere: 2D string array, 放在 More about there 下面
    * coverImg: .jpg or .png, Back to list 旁邊的左右切換頁面的顯示用
  */

  var titleRender = title.map(item => <span>{item}</span>);
  var descriptionRender = description.map(item => <div>{item}</div>);
  var imgRender = imgsToShow.map(item => <motion.img src={item} className={locationsTypeFourCss.img_prop} />);
  var tipsRender = tips.map(item => <div className={shareCss.information_left_contents_prop}>{item}</div>);
  var moreAboutThereRender = moreAboutThere.map(item => <div className={shareCss.information_right_contents_prop}>{item}</div>)

  return (
    <LocationPageLayout>
      <section id={locationsTypeFourCss.locations_type_4}>
        <div className={locationsTypeFourCss.locations_type_4_container}>
          {/* Locations Template 4 */}
          <Navbar data-aos="fade-in" />

          <div className={locationsTypeFourCss.top_container} data-aos="fade-in">
            <div className={locationsTypeFourCss.top_left_container}>
              <motion.img src={bannerImg} className={locationsTypeFourCss.bannerImg_prop} />
            </div>
            <div className={locationsTypeFourCss.top_right_container}>
              <div className={locationsTypeFourCss.index_container}>
                <span className={locationsTypeFourCss.index_prop}>{locationIndex}</span>
              </div>
              <div className={locationsTypeFourCss.title_container}>
                {titleRender}
              </div>
              <div className={locationsTypeFourCss.description_container}>
                {descriptionRender}
              </div>
            </div>
          </div>

          <div className={locationsTypeFourCss.bottom_img_container} data-aos="fade-in">
            {imgRender}
          </div>

          <div className={shareCss.information_container} data-aos="fade-in">
            <div className={shareCss.information_left_container}>
              <span className={shareCss.information_left_title_prop}>Our comments</span>
            </div>
            <div className={shareCss.information_right_container}>
              <span className={shareCss.information_right_title_prop}>More about there</span>
            </div>
          </div>

          <div className={shareCss.information_container} data-aos="fade-in">
            <div className={shareCss.information_left_contents_container}>
              {tipsRender}
            </div>
            <div className={shareCss.information_right_contents_container}>
              {moreAboutThereRender}
            </div>
          </div>

          <div className={shareCss.go_to_other_locations_img_container} data-aos="fade-in">
            <div className={shareCss.previous_container}>
              <Link to="">
                <motion.img src={prevImg} style={{ opacity: isHoveringPrev, transition: "all .2s ease-in-out" }} className={shareCss.previous_img_prop} />
              </Link>
            </div>
            <div className={shareCss.next_container}>
              <Link to="">
                <motion.img src={nextImg} style={{ opacity: isHoveringNext, transition: "all .2s ease-in-out" }} className={shareCss.next_img_prop} />
              </Link>
            </div>
          </div>

          <div className={shareCss.go_to_other_locations_container} data-aos="fade-in">
            <div className={shareCss.left_arrow_container}>
              <Link onMouseOver={handleMouseOverPrev} onMouseOut={handleMouseOutPrev} to={prevLink}><motion.img src={arrow_left} /></Link>
            </div>
            <div className={shareCss.middle_back_to_list_container}>
              <Link to="/locations" className={shareCss.back_to_list_prop}>Back to list</Link>
            </div>
            <div className={shareCss.right_arrow_container}>
              <Link onMouseOver={handleMouseOverNext} onMouseOut={handleMouseOutNext} className={shareCss.right_arrow_container} to={nextLink}><motion.img src={arrow_right} /></Link>
            </div>
          </div>

        </div>
      </section>
    </LocationPageLayout>
  );
}

export default LocationsType4;
