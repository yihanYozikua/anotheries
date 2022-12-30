import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import AOS from 'aos';

import { images } from './image_compress.ts'
import Cursor from './Cursor'
import TopGetInTouch from './Top/TopGetInTouch'
import Footer from './Footer'
import { placeholderImgs } from './image_placeholder.ts'
import aboutCss from './css/about.module.scss'
import shareCss from './css/share.module.scss'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Navbar from "./components/Navbar";
import Temp from "./Temp"

const AboutCategory = ({ img, title, description }) => {
  return(
    <div className={aboutCss.about_top_sep_container}>
      <motion.img src={img} className={aboutCss.about_top_img}/>
      <div className={aboutCss.about_top_text}>
        <span className={aboutCss.about_top_text_title}>{title}</span>
        <span className={aboutCss.about_top_text_description}>{description}</span>
      </div>
    </div>
  );
}

// function About(){
export default class About extends React.Component{
  constructor() {
    super();
    document.addEventListener('DOMContentLoaded', function(event) {
      console.log('DOMContentLoaded in constructor:', document.querySelector('.about_about_top_container__N6tFl'));
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.getElementById('reel_one').scrollLeft = 100;
    document.getElementById('reel_two').scrollLeft = 125;

    // ============ Scroll when mouse click on the top image reel ============
    document.addEventListener('DOMContentLoaded', function(event) {
      console.log('DOMContentLoaded in componentDidMount:', document.querySelector('.about_about_top_container__N6tFl'));
    });
    console.log('componentDidMount:', document.querySelector('.about_about_top_container__N6tFl'));
    const slider = document.querySelector('.about_about_top_container__N6tFl');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', function(el){
      isDown = true;
      console.log(isDown);
      slider.classList.add('active');
      startX = el.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', function(){
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', ()=>{
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e)=>{
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });


    // ============ Scroll when mouse click on the gallery image reel 1 ============
    document.addEventListener('DOMContentLoaded', function(event) {
      console.log('DOMContentLoaded in componentDidMount:', document.getElementById('reel_one'));
    });
    console.log('componentDidMount:', document.getElementById('reel_one'));
    const slider_gallery = document.getElementById('reel_one');
    let isDown_gallery = false;
    let startX_gallery;
    let scrollLeft_gallery;

    slider_gallery.addEventListener('mousedown', function(el){
      isDown_gallery = true;
      console.log(isDown_gallery);
      slider_gallery.classList.add('active');
      startX_gallery = el.pageX - slider_gallery.offsetLeft;
      scrollLeft_gallery = slider_gallery.scrollLeft;
    });
    slider_gallery.addEventListener('mouseleave', function(){
      isDown_gallery = false;
      slider_gallery.classList.remove('active');
    });
    slider_gallery.addEventListener('mouseup', ()=>{
      isDown_gallery = false;
      slider_gallery.classList.remove('active');
    });
    slider_gallery.addEventListener('mousemove', (e)=>{
      if(!isDown_gallery) return;
      e.preventDefault();
      const x = e.pageX - slider_gallery.offsetLeft;
      const walk_gallery = (x - startX_gallery) * 3;
      slider_gallery.scrollLeft = scrollLeft_gallery - walk_gallery;
      console.log(walk_gallery);
    });


    // ============ Scroll when mouse click on the gallery image reel 2 ============
    document.addEventListener('DOMContentLoaded', function(event) {
      console.log('DOMContentLoaded in componentDidMount:', document.getElementById('reel_two'));
    });
    console.log('componentDidMount:', document.getElementById('reel_two'));
    const slider_gallery_two = document.getElementById('reel_two');
    let isDown_gallery_two = false;
    let startX_gallery_two;
    let scrollLeft_gallery_two;

    slider_gallery_two.addEventListener('mousedown', function(el){
      isDown_gallery_two = true;
      console.log(isDown_gallery_two);
      slider_gallery_two.classList.add('active');
      startX_gallery_two = el.pageX - slider_gallery_two.offsetLeft;
      scrollLeft_gallery_two = slider_gallery_two.scrollLeft;
    });
    slider_gallery_two.addEventListener('mouseleave', function(){
      isDown_gallery_two = false;
      slider_gallery_two.classList.remove('active');
    });
    slider_gallery_two.addEventListener('mouseup', ()=>{
      isDown_gallery_two = false;
      slider_gallery_two.classList.remove('active');
    });
    slider_gallery_two.addEventListener('mousemove', (e)=>{
      if(!isDown_gallery_two) return;
      e.preventDefault();
      const x = e.pageX - slider_gallery_two.offsetLeft;
      const walk_gallery_two = (x - startX_gallery_two) * 3;
      slider_gallery_two.scrollLeft = scrollLeft_gallery_two - walk_gallery_two;
      console.log(walk_gallery_two);
    });



  }
  
  
  render(){
    return(
      <>
        <Temp />
        <Cursor cursorTypes={"About"}/>
        <section id={aboutCss.about}>
          <div className={aboutCss.about_container}>
            {/* About us */}
            <Navbar data-aos="fade-in" />
            <div className={aboutCss.about_top_container} data-aos="fade-in">
              <AboutCategory img={images[102]} title={'Landscape'} description={'絶景'}/>
              <AboutCategory img={images[103]} title={'Cuisine'} description={'グルメ'}/>
              <AboutCategory img={images[104]} title={'Resort'} description={'リゾート'}/>
            </div>

            <div className={aboutCss.section_two_container}>
              <div className={aboutCss.section_two_left}>
                <div className={aboutCss.section_two_title}>
                  あなたの素敵な旅のきっかけになりますように。
                </div>
                <div className={aboutCss.section_two_left_paragraph} data-aos="fade-in">
                  <span className={aboutCss.section_two_left_paragraph_prop}>「大好きな旅を通して、人と繋ぎたい。」こんな想いは、全ての始まり。</span>
                  <span className={aboutCss.section_two_left_paragraph_prop}>私たちにとって、旅には不思議な力がある。</span>
                  <span className={aboutCss.section_two_left_paragraph_prop}>行く前からワクワクで計画して、現地で景色もグルメも泊まる先も全力で楽しんで、もう帰ってきたけど、まだ余韻に浸っていて。</span>
                  <span className={aboutCss.section_two_left_paragraph_prop}>そんな素敵な旅のことを誰かに共有したい。</span>
                  <span className={aboutCss.section_two_left_paragraph_prop}>一つの言葉でもいい、一枚の写真でもいい。ほんの少しだけ、私たちの想いに共感し、「ここに行きたい！」と思ってもらい、そして、その人の「もう一つの旅」と繋げたらいいと思っている。</span>
                </div>
                <div className={aboutCss.section_two_left_paragraph} data-aos="fade-in">
                  <span className={aboutCss.section_two_left_paragraph_prop}>私たちの旅先との出会い、かけがえのない思い出は、どうかあなたの素敵な旅のきっかけになりますように。</span>
                </div>
              </div>
              <div className={aboutCss.section_two_right}>
                <div className={aboutCss.section_two_right_lists} data-aos="fade-in">
                  <span className={aboutCss.num}>4</span>
                  <span className={aboutCss.count_for}>Years</span>
                </div>
                <div className={aboutCss.section_two_right_lists} data-aos="fade-in">
                  <span className={aboutCss.num}>20</span>
                  <span className={aboutCss.count_for}>Locations</span>
                </div>
                <div className={aboutCss.section_two_right_lists} data-aos="fade-in">
                  <span className={aboutCss.num}>3</span>
                  <span className={aboutCss.count_for}>Countries</span>
                </div>
              </div>
            </div>

            <div className={aboutCss.title_container}>
              <h1>思い出から、もう一つの旅へ</h1>
            </div>
            <div className={aboutCss.about_gallery}>
              <div className={aboutCss.gallery_container} id="reel_one">
                <Link to="/locations/theSideOfTheMountain"><motion.img className={aboutCss.gallery_img} style={{width: '17.65rem', height: '17.rem'}} src={images[67]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/yokoyama"><motion.img className={aboutCss.gallery_img} style={{width: '22.54rem', height: '14.4rem'}} src={images[15]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/graxglamping"><motion.img className={aboutCss.gallery_img} style={{width: '6.2rem', height: '11.5rem'}} src={images[0]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/taipeiChildrenAmusementPark"><motion.img className={aboutCss.gallery_img} style={{width: '9.85rem', height: '16.3rem'}} src={images[54]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/fujousan"><motion.img className={aboutCss.gallery_img} style={{width: '17.65rem', height: '17.4rem'}} src={images[92]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/naraAndHotel"><motion.img className={aboutCss.gallery_img} style={{width: '12rem', height: '12rem'}} src={images[40]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/theoutpost"><motion.img className={aboutCss.gallery_img} style={{width: '13.95rem', height: '19.51rem'}} src={images[99]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/ine"><motion.img className={aboutCss.gallery_img} style={{ width: '15rem', height: '6rem'}} src={images[75]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/hokkaido"><motion.img className={aboutCss.gallery_img} style={{width: '18.7rem', height: '14.6rem'}} src={images[93]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/bookAndBedTokyoIkeBuKuRo"><motion.img className={aboutCss.gallery_img} style={{width: '10.8rem', height: '15.6rem'}} src={images[63]} loading="lazy" data-aos="fade-in"></motion.img></Link>
              </div>
              <div className={aboutCss.gallery_container} id="reel_two" data-aos="fade-in">
                <Link to="/locations/mapleawanda"><motion.img className={aboutCss.gallery_img} style={{width: '14rem', height: '20rem'}} src={images[73]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/takayama"><motion.img className={aboutCss.gallery_img} style={{width: '19.5rem', height: '11.4rem'}} src={images[50]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/fujisan"><motion.img className={aboutCss.gallery_img} style={{width: '18.5rem', height: '13.6rem'}} src={images[86]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/tokyoTower"><motion.img className={aboutCss.gallery_img} style={{width: '7.2rem', height: '11.7rem'}} src={images[16]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/nintynineisland"><motion.img className={aboutCss.gallery_img} style={{width: '18.5rem', height: '13.6rem'}} src={images[29]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/shiragawa"><motion.img className={aboutCss.gallery_img} style={{width: '16.5rem', height: '16.5rem', objectPosition: 'left bottom'}} src={images[70]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/kamogawa"><motion.img className={aboutCss.gallery_img} style={{width: '17.2rem', height: '20.5rem'}} src={images[83]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/shonan"><motion.img className={aboutCss.gallery_img} style={{width: '19.65rem', height: '13.1rem'}} src={images[8]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/umeda"><motion.img className={aboutCss.gallery_img} style={{width: '14.6rem', height: '24.3rem'}} src={images[90]} loading="lazy" data-aos="fade-in"></motion.img></Link>
                <Link to="/locations/flowertree"><motion.img className={aboutCss.gallery_img} style={{width: '21.4rem', height: '16.1rem'}} src={images[96]} loading="lazy" data-aos="fade-in"></motion.img></Link>
              </div>
            </div>
          </div>
        </section>
        <TopGetInTouch bg_color={"#D4D5CB"} />
        <Footer bg_color={"#D4D5CB"} />
      </>
      
    );
  }
}

// export default About;
