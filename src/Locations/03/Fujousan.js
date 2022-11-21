import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType3'


function Fujousan(){
  return(
    <LocationsTemplate bannerImg={images[92]}  locationIndex={'119'}
                        imgsAll={[images[86], images[87], images[88], images[89]]}
                        imgsToShow={[images[92], images[105]]}
                        title={['まわりまわって やはりこの景色']}
                        description={['何気ない土曜日に不意にやってきた、何かを眺めたい気持ち。',
                                      '多分、13インチのモニターに閉じ込められる日常と対抗していると思う。',
                                      <br></br>,
                                      '福州山は市内にある小さな山で、',
                                      '知っている人は知っている、穴場の夜景スポットらしい。',
                                      '正直、24年間台北に住んでいた私も、初めて知った。',
                                      <br></br>,
                                      '私はやはり都会の景色が好き。',
                                      'もちろん旅行もたくさん行ってきたし､',
                                      '海も山も､自然とふれあうの趣味の一つではあるけど、',
                                      '高層ビルに囲まれたこの包み込まれた感じは、なんか落ち着く。',
                                      'ここで再確認できた、私の体内に都会子の血が流れていること。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        coverImgPosition={'top center'}
                        prevImg={images[177]}
                        nextImg={images[40]}
                        prevLink="/locations/theSideOfTheMountain"
                        nextLink="/locations/naraAndHotel"/>
  );
}

export default Fujousan;