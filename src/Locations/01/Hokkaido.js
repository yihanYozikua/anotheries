import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType1'


function Hokkaido(){
  return(
    <LocationsTemplate bannerImg={images[93]}  locationIndex={'001'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[94], images[95]]}
                        title={['満ちている時に出会った景色が好き、', '満たしてくれる景色よりずっと']}
                        description={['初めての北海道は、鉄道の旅だった。',
                                      '行きたいところを全部回りたい、そんな欲望を叶えずに、',
                                      '最長で片道6時間の大移動まで起こした。',
                                      <br></br>,
                                      'グラグラ揺れて、寝ては起きて、この繰り返し。',
                                      'あの時、窓から流れた景色は映画のような、',
                                      '雪面から反射された眩しすぎる真っ白な世界は',
                                      '時間が経つにつれて薄明となり、日暮れのピンク色に染まっていく。',
                                      <br></br>,
                                      '映画デートの醍醐味は、明るいうちに映画館入って、出てきたら外が暗くなっていて、ああ、長い時間をこの人と過ごしたんだなって錯覚すること。',
                                      <br></br>,
                                      '鉄道デートも、そういうのがあるかもしれないね。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        coverImgPosition={'center center'}
                        prevImg={images[96]}
                        nextImg={images[86]}
                        prevLink="/locations/flowertree"
                        nextLink="/locations/fujisan"/>
  );
}

export default Hokkaido;