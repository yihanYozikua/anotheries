import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import AOS from 'aos';
import { images } from './image_data.ts'
import footerCss from './css/footer.module.scss'
import shareCss from './css/share.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";

function Footer({ bg_color }) {
  const openPrivacyPolicyPage = () => {
    // window.open("https://www.google.com/", "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=400, height=600, top=30");
    window.open("https://yihanyozikua.github.io/anotheries/#/privacy_policy", "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=800, height=600, top=30");
  }
  return (
    <section id={footerCss.footer} style={{ backgroundColor: bg_color }}>
      <Navbar wrapperComponent="div" className={footerCss.bottom_nav_container} data-aos="fade-in" />
      <div className={footerCss.privacy_policy_container} data-aos="fade-in">
        <span className={footerCss.privacy_policy_content} style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={openPrivacyPolicyPage} alt='' src='https://www.google.com/'>Privacy policy</span>
        <span className={footerCss.privacy_policy_content}>Copyright © 2023 by Anotheries Team, All Rights Reserved</span>
      </div>
    </section >
  );
}

export default Footer;
