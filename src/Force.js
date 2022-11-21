import {useState} from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Input } from "./Input.tsx";
import force from './css/force.module.scss'
import {images} from './image_data.ts'
import AOS from 'aos';


export const Force = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className={force.example}>
      <div>
        <motion.img
          src={images[44]}
          className={force.gallery_img}
          animate={{ y: "30vh" }}
          transition={{ type: "spring", delay: 1, bounce: 0.3 }}
        />
        <motion.img
          src={images[65]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 2, bounce: 0.3 }}
        />
        <motion.img
          src={images[70]}
          className={force.gallery_img}
          animate={{ y: "15vh" }}
          transition={{ type: "spring", delay: 1, bounce: 0.3 }}
        />
        <motion.img
          src={images[74]}
          className={force.gallery_img}
          animate={{ y: "25vh" }}
          transition={{ type: "spring", delay: 2, bounce: 0.3 }}
        />
        <motion.img
          src={images[3]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 3, bounce: 0.3 }}
        />
        <motion.img
          src={images[67]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 3, bounce: 0.3 }}
        />
        <motion.img
          src={images[19]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 3, bounce: 0.3 }}
        />
        <motion.img
          src={images[18]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 3, bounce: 0.3 }}
        />
        <motion.img
          src={images[34]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 3, bounce: 0.3 }}
        />
        <motion.img
          src={images[54]}
          className={force.gallery_img}
          animate={{ y: "20vh" }}
          transition={{ type: "spring", delay: 3, bounce: 0.3 }}
        />
      </div>
    </div>
  );
};
