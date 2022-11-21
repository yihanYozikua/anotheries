import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { images } from './image_compress.ts'
import loadingCss from './css/loading_page.module.scss'

export default function LoadingPage(){
  return(
    <div id={loadingCss.loading_page} className={loadingCss.loader}></div>
  );
}