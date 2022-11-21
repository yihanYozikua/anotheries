import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType1_1'


function Ine(){
  return(
    <LocationsTemplate bannerImg={images[75]}  locationIndex={'317'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[76], images[77]]}
                        title={['私は伊根での過ごし方。']}
                        description={['自転車に乗った。家に入れる船も乗った。',
                                      'たぬきうどんを食べた。知らない魚丸ごと1尾も食べた。',
                                      '海の上に朝を迎えた。そして朝焼けのビデオを撮った。',
                                      <br></br>,
                                      '特別なこと何もしなかった。',
                                      '街でぶらぶらして、いい写真スポットを探索し夕焼けを待ち、',
                                      '夜になったら地元の方が行ってそうな居酒屋で、見たことのないメニューを頼む。',
                                      <br></br>,
                                      '楽しそうな時も、そうでない時も。',
                                      '病みそうな時も、そうでない時も。',
                                      'いつだって変わらない、私の旅行スタイル。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[0]}
                        nextImg={images[63]}
                        prevLink="/locations/graxglamping"
                        nextLink="/locations/bookAndBedTokyoIkeBuKuRo"/>
  );
}

export default Ine;