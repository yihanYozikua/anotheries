import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType1_1'


function Takayama(){
  return(
    <LocationsTemplate bannerImg={images[50]}  locationIndex={'013'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[51], images[52]]}
                        title={['まだ雪を追いたい']}
                        description={['生まれも育ちも南国の島である私は､',
                                      'はじめて雪が降る冬を迎えた。',
                                      'あの真っ白な景色、鼻の奥がツーンとする冬の匂いに､',
                                      'なぜか憧れを持っていた。',
                                      'この憧れは次第に行動力となり、私をここに連れ出した。',
                                      <br></br>,
                                      '今回泊まる宿も、憧れで選んだ。',
                                      'アニメ「花咲くいろは」を見て、老舗旅館に泊まりたい欲が収まらなかった。',
                                      <br></br>,
                                      '経年変化で温もりが出る木目、温かくて凝った手料理、おばさんたちが不意に見せてくれた優しい笑顔、私から見ると、どれも日本ならではのおもてなしだと見えた。',
                                      '実は、今回は日本で初めての一人だった。高山で過ごした穏やかな時間はかけがえのないものになり、いつ思い出しても、思わず口角が上がるほど幸せな思い出だった。',
                                      <br></br>,
                                      '岐阜に雪を見に行くのは多分主流ではないと思うけど、',
                                      '私にはここがいい。',
                                      '今年も来年も、ここで雪を追いたい。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[99]}
                        nextImg={images[15]}
                        prevLink="/locations/theoutpost"
                        nextLink="/locations/yokoyama"/>
  );
}

export default Takayama;