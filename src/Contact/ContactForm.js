import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import {Link, useLocation} from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

// import { images } from './image_data.ts'
import contactFormCss from '../css/contact_form.module.scss'
import arrow_right_short from '../static/arrow/arrow_right_short.svg'
import arrow_down_short from '../static/arrow/arrow_down_short.svg'
import arrow_right_double_check from '../static/arrow/arrow_right_contact_double_check.svg'
import contact_banner_img from '../static/compressedImg_resize/contact/form_banner.png'
import ContactPageLayout from "./ContactPageLayout";
import Navbar from "../components/Navbar";

function ContactForm() {
  window.onbeforeunload = function () {return false;}
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
        target="_blank"
        className={contactFormCss.description_right_email}
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  }

  const [nameValue, setName] = useState('');
  const nameHandleChange = event => {
    setName(event.target.value);
    console.log('user name is:', event.target.value);
  };
  const [phoneValue, setPhone] = useState('');
  const phoneHandleChange = event => {
    setPhone(event.target.value);
    console.log('user phone is:', event.target.value);
  };
  const [emailValue, setEmail] = useState('');
  const emailHandleChange = event => {
    setEmail(event.target.value);
    console.log('user email is:', event.target.value);
  };
  const [messageValue, setMessage] = useState('');
  const messageHandleChange = event => {
    setMessage(event.target.value);
    console.log('user message is:', event.target.value);
  };

  var isDoubleCheckDisabled = 'none';
  if ( nameValue && phoneValue && emailValue && messageValue){
    isDoubleCheckDisabled = 'unset';
  }

  const location = useLocation();

  return (
    <ContactPageLayout>
      <section id={contactFormCss.contact}>
        <div className={contactFormCss.contact_container}>
          {/* Contact Form Page */}
          <Navbar data-aos="fade-in" />

          <div className={contactFormCss.banner_container}>
            <motion.img className={contactFormCss.banner_img} src={contact_banner_img} loading="lazy" data-aos="fade-in"></motion.img>

            <div className={contactFormCss.description_container}>
              <div className={contactFormCss.description_left}>
                <div className={contactFormCss.description_left_paragraph} data-aos="fade-in">
                  <span>私たちがそう思う。</span>
                  <span>旅行は、憧れから始まる。</span>
                  <span>人に旅行へ憧れを与えられるようなサイトにしたい。</span>
                  <span>「次ここ行きたいなあ」「行けたらここでご飯しようか」、旅行計画をする時人は思わずに笑顔になる。私たちのコンセプトに少しでもご共感・ご興味を持ってもらえたら嬉しいです。</span>
                </div>
                <div className={contactFormCss.description_left_paragraph} data-aos="fade-in">
                  <span>あなたからのご意見・ご質問を心待ちしております。</span>
                  <span>どうそお気軽に。</span>
                </div>

                <form id={contactFormCss.contactForm} ref={myRef}>
                  <div className={contactFormCss.input_form_element_container} data-aos="fade-in">
                    <label htmlFor="fname">お名前</label>
                    <input type="text" id="fname" name="fname" placeholder="Name"
                      onChange={nameHandleChange} value={nameValue} ></input>
                  </div>
                  <div className={contactFormCss.input_form_element_container} data-aos="fade-in">
                    <label htmlFor="fphone">ご連絡先</label>
                    <input type="text" id="fphone" name="fphone" placeholder="Phone number"
                      onChange={phoneHandleChange} value={phoneValue}></input>
                  </div>
                  <div className={contactFormCss.input_form_element_container} data-aos="fade-in">
                    <label htmlFor="femail">メール</label>
                    <input type="text" id="femail" name="femail" placeholder="E-mail"
                      onChange={emailHandleChange} value={emailValue}></input>
                  </div>
                  <div className={contactFormCss.input_form_element_container} data-aos="fade-in" style={{ marginBottom: '1rem' }}>
                    <label htmlFor="fmessage">メッセージ</label>
                    <TextareaAutosize id="fmessage" name="fmessage" placeholder="Message"
                      onChange={messageHandleChange} value={messageValue} />
                  </div>
                  <div className={contactFormCss.input_form_element_container}>
                    <div className={contactFormCss.double_check_container} data-aos="fade-in">
                      <Link to="/contact_confirm" className={contactFormCss.double_check_prop}
                        state={{
                          name: nameValue,
                          phone: phoneValue,
                          email: emailValue,
                          message: messageValue
                        }}
                        style={{pointerEvents: isDoubleCheckDisabled}}
                        >Double check</Link>
                      <img src={arrow_right_double_check} alt="" className={contactFormCss.arrow_right_short_prop}></img>
                    </div>
                  </div>
                </form>
              </div>

              <div className={contactFormCss.description_right}>
                <div className={contactFormCss.description_sep_container} data-aos="fade-in">
                  <span className={contactFormCss.description_right_title}>メールでご連絡</span>
                  <div className={contactFormCss.description_right_button_container}>
                    <Mailto email="chloe981219@gmail.com" subject="Greetings from {Please Enter Your Name Here}" body="Dear Untitled Creative Team,">chloe981219@gmail.com</Mailto>
                    <img src={arrow_right_short} alt="" className={contactFormCss.arrow_right_short_prop}></img>
                  </div>
                </div>
                <div className={contactFormCss.description_sep_container} data-aos="fade-in">
                  <span className={contactFormCss.description_right_title}>フォームでご連絡</span>
                  <div className={contactFormCss.description_right_button_container}>
                    <span className={contactFormCss.description_right_scroll_down} onClick={executeScroll}>scroll down</span>
                    <img src={arrow_down_short} alt="" className={contactFormCss.arrow_down_short_prop}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </ContactPageLayout>
  );
}

export default ContactForm;
