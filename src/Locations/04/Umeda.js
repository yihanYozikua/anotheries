import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType4'


function Umeda(){
  return(
    <LocationsTemplate bannerImg={images[90]}  locationIndex={'423'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[91]]}
                        title={['いろんな人の小さな美しいが､', '街の中に散らばっている。']}
                        description={['ただいま､梅田。',
                                      '人の数だけ思い出がある。そしたらきっと梅田にはたくさんの思い出が詰まっている。',
                                      '私も京都に留学していた頃、よく京阪で淀屋橋に行って、そこから15分かけて梅田まで歩いていた。',
                                      '初めてのデート、友人と卒業以来の再会、少し背伸びした買い物。',
                                      '忘れられない思い出から小さな出来事まで、梅田の街に散らばっている。',
                                      <br></br>,
                                      'そして、今日も同じ歩道橋で同じ街並みを眺めていた。',
                                      '行き交う人々は､相変わらずものすごいスピードだ。',
                                      '私は､いつまであの交差点を､颯爽と渡りきれるのだろうか？',
                                      '渡りきれたら、またもう一つの出来事を梅田に散らかすことができるだろう。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[50]}
                        nextImg={images[96]}
                        prevLink="/locations/takayama"
                        nextLink="/locations/flowertree"/>
  );
}

export default Umeda;