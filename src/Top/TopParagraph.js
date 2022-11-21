import { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { images } from '../image_data.ts'
import topPara from '../css/top_paragraph.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md';
import AOS from 'aos';
import ImgGallery from "../components/ImgGallery"



export const TopParagraph = () => {
  return(
    <section id={topPara.top_paragraph}>
      {/* Paragraph Sectio between Top Up & Top Down */}
      <div className={topPara.paragraph_container}>
        <div className={topPara.paragraph_contents} data-aos="fade-in">
          <h1>思い出から、もう一つの旅へ</h1>
          <br></br>
          <br></br>
          <span>私たちは、旅することが好き。</span>
          <span>SNSで絶景と呼ばれる壮大な景色、おじいちゃんから出してくれた美味しいご</span>
          <span>飯、「眠い、眠いなあ」と言いながら迎えた朝焼け。</span>
          <span>旅の思い出はまだまだたくさんある、これからもたくさん増やしていく。</span>
          <br></br>
          <span>写真と言葉を通して、「ここに行きたい！」と思ってもらい、</span>
          <span>そして、その人の「もう一つの旅」と繋げる。</span>
          <br></br>
          <span>私たちが旅を通して思うこと、感じたこと、</span>
          <span>かけがえのない旅の瞬間をどうぞお楽しみに。</span>
        </div>
      </div>
    </section>
  );
};