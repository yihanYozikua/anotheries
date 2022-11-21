import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import topCss from './css/top_up.module.scss'
import AOS from 'aos';

const ProgressiveImg = ((placeholderSrc, src, animate, transition) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    }
  }, [src]);

  return(
    <motion.img
      // {...{src: imgSrc, ...props}}
      src={imgSrc}
      placeholder={placeholderSrc}
      loading="lazy"
      // alt={props.alt || ""}
      className={topCss.top_up_gallery_container}
      animate={animate}
      transition={transition}
    >
    </motion.img>
  );
});

export default ProgressiveImg;