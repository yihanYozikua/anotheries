import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType6'


function NaraAndHotel(){
  return(
    <LocationsTemplate bannerImg={images[40]}  locationIndex={'627'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[41], images[42], images[43], images[44]]}
                        title={['山、川、素敵な宿', '全部わたしのためである']}
                        description_left={['知っている人は知っている',
                                      '山奥にある素敵なホテルで穏やかな時間を過ごしたい',
                                      'こんなわがままを叶えてくれるのは、奈良若草山のANDO HOTELやった',
                                      <br></br>,
                                      '今回のこだわりは',
                                      '一面のガラスとその見晴らし',
                                      <br></br>]}
                        description_right={['この景色さえ見つめれば、昨日の後悔も明日への不安も、',
                                      '一瞬どうてもよくなってきた',
                                      <br></br>,
                                      '山、川、素敵な宿',
                                      '全ては目まぐるしい生活の癒しになり',
                                      'かわいいわたしのためである']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[92]}
                        nextImg={images[29]}
                        prevLink="/locations/fujousan"
                        nextLink="/locations/nintynineisland"/>
  );
}

export default NaraAndHotel;