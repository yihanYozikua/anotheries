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
    <LocationsTemplate bannerImg={images[16]}  locationIndex={'098'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[16], images[17]]}
                        title={['生活の跡のちっぽけさに泣きそうになる。']}
                        description={['東京のど真ん中にあるのに、',
                                      '東京タワーから見えないもの何だ？',
                                      <br></br>,
                                      '東京は夢を叶えるための場所じゃない、',
                                      '夢が叶わなったことに気づかずにいられる場所だよって誰かが言った。',
                                      <br></br>,
                                      '東京タワーに登って、なぜか切なくなってきた。',
                                      'きっと今日は曇りだから。',
                                      'きっとテンションを上げすぎちゃって疲れてるから。',
                                      'きっとこの言葉を想い出したからだろうか。',
                                      <br></br>,
                                      '山とか、展望台とか、タワーとか、',
                                      '久しぶりに高所に行くたびに、',
                                      '視界が開けられて、建物、車、人、生活の跡のちっぽけさに泣きそうになる。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[8]}
                        nextImg={images[50]}
                        prevLink="/locations/shonan"
                        nextLink="/locations/takayama"/>
  );
}

export default TokyoTower;