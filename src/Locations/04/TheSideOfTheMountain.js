import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType4'


function TheSideOfTheMountain(){
  return(
    <LocationsTemplate bannerImg={images[67]}  locationIndex={'237'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[68]]}
                        title={['私たちがやってきた', '素敵な山の向こう側']}
                        description={['はるばると山奥にやってきた',
                                      '緑に囲まれて',
                                      '風と葉擦れの音しか聞こえない',
                                      <br></br>,
                                      '忙しい日々に慣れてしまい',
                                      '一瞬この開放感あふれた空間に違和感を感じた',
                                      <br></br>,
                                      '夜急に降り始める雨に起こされ',
                                      '眠りにつけない',
                                      'そのままテントの網戸から外を眺めていた',
                                      <br></br>,
                                      '早朝5時霧が晴れて日が昇り、',
                                      '目の前の景色は',
                                      '自分の悩みもストレスも',
                                      'どうでもよくなるくらい美しかった',
                                      'ぼんやりとした不安も',
                                      'ちっぽけだったなあと思えるような',
                                      <br></br>,
                                      'また生活に疲れたらキャンプ行きたいね']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[86]}
                        nextImg={images[92]}
                        prevLink="/locations/fujisan"
                        nextLink="/locations/fujousan"/>
  );
}

export default TheSideOfTheMountain;