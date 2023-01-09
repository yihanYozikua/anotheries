import React from "react";

// import { images } from './image_data.ts'
import {images_random} from '../image_data_contact_thanks_easter_egg.ts'
import contactThanksCss from '../css/contact_thanks.module.scss'
import ContactPageLayout from "./ContactPageLayout";
import Navbar from "../components/Navbar";
import downloadIcon from '../static/arrow/download.svg'
import arrow_right from '../static/arrow/arrow_right_contact_double_check.svg'
import {Link, useLocation, useNavigate, Navigate} from "react-router-dom";
import { saveAs } from 'file-saver'
import {images} from "../image_compress.ts";

function ContactThanks() {
  const location = useLocation();
  if (!location.state) {
    return <Navigate to="/contact" />
  }

  return (
    <ContactPageLayout>
      <section id={contactThanksCss.contact_thanks}>
        <div className={contactThanksCss.contact_thanks_container}>
          <Navbar data-aos="fade-in" />

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
            <img src={location.state.easteregImg} alt="" className={contactThanksCss.contact_thanks_img_prop} data-aos="fade-in"></img>
            <div className={contactThanksCss.contact_thanks_img_description_area} data-aos="fade-in">
              <span
                className={contactThanksCss.contact_thanks_img_description_sep_prop}>{location.state.imageLocation}</span>
              <span
                className={contactThanksCss.contact_thanks_img_description_sep_prop}>{location.state.imageDate}</span>
            </div>
            {/*<a className={contactThanksCss.contact_thanks_img_download_button_container} onClick={(e) => download(e)}>*/}
            <a className={contactThanksCss.contact_thanks_img_download_button_container} download="easter_egg.jpg" href={location.state.easteregImg}>
              <img className={contactThanksCss.contact_thanks_img_download_button_prop} src={downloadIcon} />
            </a>
          </div>

          <Link to="/" className={contactThanksCss.back_to_top_button_container}>
            <div className={contactThanksCss.back_to_top_button_title}>Back to top</div>
            <img className={contactThanksCss.back_to_top_button_arrow} src={arrow_right} />
          </Link>

          <div className={contactThanksCss.dialogue_container}>
            <div className={contactThanksCss.dialogue_container_up} data-aos="fade-in">
              <div
                className={contactThanksCss.dialogue_container_up_prop}>テキストが入ります。コメントが入ります。テキストが入ります。コメントが入ります。
              </div>
            </div>
            <div className={contactThanksCss.dialogue_container_down} data-aos="fade-in">
              <div
                className={contactThanksCss.dialogue_container_down_prop}>テキストが入ります。コメントが入ります。テキストが入ります。コメントが入ります。
              </div>
            </div>
          </div>

        </div>
      </section>
    </ContactPageLayout>
  );
}

export default ContactThanks;
