import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { images } from './image_compress.ts'
import PageLayout from "./components/PageLayout";
import Cursor from "./Cursor";
import Temp from "./Temp"
import TopAncestor from "./Top/TopAncestor";
import { TopParagraph } from "./Top/TopParagraph";
import TopGalleryArbitrary from './Top/TopGalleryArbitrary'
import TopViewLocations from "./Top/TopViewLocations";
import Navbar from "./components/Navbar";

export default function Top(){
  const top_bg_color = "#B3B3BE";

  return(
    <PageLayout>
      <Temp />
      <Cursor cursorTypes={"Top"} />
      <Navbar data-aos="fade-in" />
      <TopAncestor />
      <TopParagraph />
      <TopGalleryArbitrary bg_color={top_bg_color} showOrNot={"0"} />
      <TopViewLocations />
    </PageLayout>
  )
}