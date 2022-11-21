import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType3'


function TokyoTower(){
  return(
    <LocationsTemplate bannerImg={images[99]}  locationIndex={'098'}
                        imgsAll={[images[99], images[100], images[101]]}
                        imgsToShow={[images[99], images[101]]}
                        title={['豪華、贅沢、南国リゾートの代表格']}
                        description={['The Outpost Hotelはシンガポールのセントサ島にある高級ホテルの一員で、',
                                      '大理石基調な空間、果ての見えないプール、',
                                      '旅行気分満載のヤシの木。どこを切り取っても、映画「クレイジー・リッチ!」のワンシーンみたいで、',
                                      '豪華、贅沢、南国リゾートの代表格と言っても過言ではない景色。',
                                      <br></br>,
                                      '平日でも一晩2万8千円のお値段するので、社会人成り立ての私たちにとって、結構頑張った。',
                                      <br></br>,
                                      'コロナ以来初めての海外旅行は､',
                                      '親の新婚旅行の場所である､',
                                      '私がずっとずっと憧れたシンガポールへ。',
                                      <br></br>,
                                      '願いを叶う旅、The Outpost Hotelと共に幕を開けた。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[53]}
                        nextImg={images[50]}
                        prevLink="/locations/taipeiChildrenAmusementPark"
                        nextLink="/locations/takayama"/>
  );
}

export default TokyoTower;