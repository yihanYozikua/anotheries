import React, {useRef} from "react";
import {motion} from "framer-motion";
import {useLocation, useNavigate} from 'react-router-dom';
import emailjs from '@emailjs/browser';

// import { images } from './image_data.ts'
import {images} from '../image_compress.ts'
import contactConfirmCss from '../css/contact_confirm.module.scss'
import arrow_right_double_check from '../static/arrow/arrow_right_contact_double_check.svg'
import ContactPageLayout from "./ContactPageLayout";
import Navbar from "../components/Navbar";

function ContactConfirm() {
  const location = useLocation();

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
        target="_blank"
        className={contactConfirmCss.send_button_prop}
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  }

  const subject = 'Greetings from ' + location.state.name;
  const body = 'Dear Untitled Team, %0D%0A' + location.state.message + '%0D%0A%0D%0ABest Regards,%0D%0A' + location.state.name + '%0D%0AEmail: ' + location.state.email + '%0D%0APhone Number: ' + location.state.phone

  //================ EmailJS ====================
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1bonguf',
      'template_665stlf',
      form.current,
      'l-V7r71Gjrag_DGQF')
      .then((result) => {
        console.log(result.text);
        console.log("message sent!");
      }, (error) => {
        console.log(error.text);
      });
    navigate("/contact_send_successfully");

  };

  return (
    <ContactPageLayout>
      <section id={contactConfirmCss.contact_confirm}>
        <div className={contactConfirmCss.contact_container}>
          <Navbar data-aos="fade-in" />

          <div className={contactConfirmCss.banner_container} data-aos="fade-in">
            <motion.img className={contactConfirmCss.banner_img_prop} src={images[15]} loading="lazy"></motion.img>
          </div>

          <form ref={form} className={contactConfirmCss.form_check_container} onSubmit={sendEmail}>
            <div className={contactConfirmCss.form_blank_check_container} data-aos="fade-in">
              <label className={contactConfirmCss.form_label_prop}>お名前</label>
              <input type="text" className={contactConfirmCss.form_value_prop} name="user_name" value={location.state.name} readOnly />
            </div>
            <div className={contactConfirmCss.form_blank_check_container} data-aos="fade-in">
              <label className={contactConfirmCss.form_label_prop}>ご連絡先</label>
              <input type="text" className={contactConfirmCss.form_value_prop} name="user_phone" value={location.state.phone} readOnly />
            </div>
            <div className={contactConfirmCss.form_blank_check_container} data-aos="fade-in">
              <label className={contactConfirmCss.form_label_prop}>メール</label>
              <input type="email" className={contactConfirmCss.form_value_prop} name="user_email" value={location.state.email} readOnly />
            </div>
            <div className={contactConfirmCss.form_blank_check_container} data-aos="fade-in">
              <label className={contactConfirmCss.form_label_prop}>メッセージ</label>
              <input type="text" className={contactConfirmCss.form_value_prop} name="message" value={location.state.message} readOnly />
            </div>
            <div className={contactConfirmCss.send_button_container} data-aos="fade-in">
              <input type="submit" value="Send" className={contactConfirmCss.send_button_prop} />
              <img src={arrow_right_double_check} alt="" className={contactConfirmCss.arrow_right_short_prop} style={{ width: '2.8rem' }}></img>
            </div>
          </form>

        </div>

      </section>
    </ContactPageLayout>
  );
}

export default ContactConfirm;
