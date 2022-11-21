import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation, useHistory } from 'react-router-dom';
import AOS from 'aos';

// import { images } from './image_data.ts'
import { images } from '../image_compress.ts'
import { images_random } from '../image_data_contact_thanks_easter_egg.ts'
import { placeholderImgs } from '../image_placeholder.ts'
import contactThanksCss from '../css/contact_thanks.module.scss'
import shareCss from '../css/share.module.scss'
import ContactPageLayout from "./ContactPageLayout";
import Navbar from "../components/Navbar";

function ContactThanks(){
  const image_location = ["Grax Camping", "Shonan", "Yin Young Sea", "Nara Wakakusaya Night View", "99 Islands", "Atami"]
  const image_date = ["2020.02", "2017.08", "2021.08", "2022.06", "2019.11", "2020.08"]
  const index = Math.floor(Math.random() * (images_random.length - 1) + 1);
  console.log("index: " + index);
  // let img_easter_egg = images_random[Math.floor(Math.random()*images_random.length)];

  return (
    <ContactPageLayout>
      <section id={contactThanksCss.contact_thanks}>
        <div className={contactThanksCss.contact_thanks_container}>
          <Navbar data-aos="fade-in"/>

          <div className={contactThanksCss.contact_thanks_title} data-aos="fade-in">
            <span>Thank you for the message!</span>
          </div>

          <div className={contactThanksCss.contact_thanks_descriptions_container}>
            <span className={contactThanksCss.contact_thanks_descriptions_sep_prop} data-aos="fade-in">
              この度、ご連絡をいただき誠にありがとうございます。
            </span>
            <span className={contactThanksCss.contact_thanks_descriptions_sep_prop} data-aos="fade-in">
              内容をご確認し、改めて、chloe981219@gmail.comよりメールにてご連絡をさせていただきます。
            </span>
            <span className={contactThanksCss.contact_thanks_descriptions_sep_prop} data-aos="fade-in">
              なお、内容によっては、ご返事までにお時間をいただく場合もございます。あらかじめご了承ください。
            </span>
            <span className={contactThanksCss.contact_thanks_descriptions_sep_prop} data-aos="fade-in">
              それでは素敵な1日でありますよう、心より願っております。
            </span>
            <br></br>
            <span className={contactThanksCss.contact_thanks_descriptions_sep_prop} data-aos="fade-in">
              下記のロケーション写真につきまして、メッセージをいただいた方のみご覧できる私たちのささやかなサプライズです。もちろんサイトには公開しておりませんし、今後公開するつもりもありません。
            </span>
            <span className={contactThanksCss.contact_thanks_descriptions_sep_prop} data-aos="fade-in">
              どうかお気に入ってただければ幸いです。
            </span>
          </div>

          <div className={contactThanksCss.contact_thanks_img_area_container}>
            <img src={images_random[index]} alt="" className={contactThanksCss.contact_thanks_img_prop} data-aos="fade-in"></img>
            <div className={contactThanksCss.contact_thanks_img_description_area} data-aos="fade-in">
              <span className={contactThanksCss.contact_thanks_img_description_sep_prop}>{image_date[index]}</span>
              <span className={contactThanksCss.contact_thanks_img_description_sep_prop}>{image_location[index]}</span>
            </div>
          </div>

          <div className={contactThanksCss.dialogue_container}>
            <div className={contactThanksCss.dialogue_container_up} data-aos="fade-in">
              <div className={contactThanksCss.dialogue_container_up_prop}>テキストが入ります。コメントが入ります。テキストが入ります。コメントが入ります。</div>
            </div>
            <div className={contactThanksCss.dialogue_container_down} data-aos="fade-in">
              <div className={contactThanksCss.dialogue_container_down_prop}>テキストが入ります。コメントが入ります。テキストが入ります。コメントが入ります。</div>
            </div>
          </div>

        </div>
      </section>
    </ContactPageLayout>
  );
}

export default ContactThanks;
