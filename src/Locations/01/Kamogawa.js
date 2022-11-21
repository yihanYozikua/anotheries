import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType1'


function GraxCamping(){
  return(
    <LocationsTemplate bannerImg={images[83]}  locationIndex={'046'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[84], images[85]]}
                        title={['鴨川に桜が咲くのと同じ頃に']}
                        description={['春になったら鴨川へ。',
                                      '京都の大学に通う外国人なら､必ず入国早々から仕入れた情報の一つだ。',
                                      <br></br>,
                                      'そして秋学期を経って、寒すぎる冬も耐えたら、',
                                      '待ちに待った､ピンク色の世界がやってきた。',
                                      <br></br>,
                                      'せっかくなので､人の目を気にせずにゆっくり思い出を残りたいと思って､',
                                      '朝一の時間帯を狙い､カメラを肩にかけて､自転車に飛び乗った勢いそのままに､いつも通りかかっている場所へ。',
                                      <br></br>,
                                      'カメラでカシャッカシャッ写真を撮って、川沿いで楽しく歩いて、',
                                      'ふっと頭振り向いたら、これまでの道のりがとても美しかったことを気づいた。',
                                      'そしてここから始まる､桜のあるはじまりも、きっとそれを負けないような素敵なものになれるでしょう。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        coverImgPosition={'center bottom'}
                        prevImg={images[16]}
                        nextImg={images[90]}
                        prevLink="/locations/tokyoTower"
                        nextLink="/locations/umeda"/>
  );
}

export default GraxCamping;