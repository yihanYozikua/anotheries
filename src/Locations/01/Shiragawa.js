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
    <LocationsTemplate bannerImg={images[70]}  locationIndex={'321'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[71], images[72]]}
                        title={['すっと漂う透明感で作る', '自分と自分会話する時間']}
                        description={['東京の景色は、わかりやすいものだ。',
                                      '密集している高層ビル、派手な広告看板、表情が浮かない人たち、どこに行っても予想通り。',
                                      <br></br>,
                                      'しかしその中、一つだけ私にとって特別な存在になる場所がある。',
                                      'それは留学中の春休みに行ってきた東京旅、',
                                      '目的地すら決めずに、思考停止のまま半蔵門線に乗って、何気なく降りた駅やった。',
                                      <br></br>,
                                      '清澄白河、名前だけでなんか美しい。',
                                      <br></br>,
                                      'すっと漂う透明感、穏やかな空気、',
                                      'ここだけ時間が止まった感じがするように、',
                                      '人を落ち着かせる。',
                                      <br></br>,
                                      '橋を渡り、川沿いで歩く',
                                      '時に立ちとまり、向こう側の建物に眺めたり、',
                                      '歩く途中でいい感じなカフェと出会い、',
                                      '軽く昼食を摂るつもりなのに、結構食事後のデザートとしてマフィンまでしっかりいただいた。',
                                      <br></br>,
                                      '歩きながら想い出す、歩くから気づく。',
                                      '清澄白河で、普段考えることがない日常の些細なことから、',
                                      '人生に大きく影響を与えたハプニングまで',
                                      '思い出が甦るたび、気持ちが透明になって',
                                      '切なさに泣きそうになる。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        coverImgPosition={'center bottom'}
                        prevImg={images[63]}
                        nextImg={images[53]}
                        prevLink="/locations/bookAndBedTokyoIkeBuKuRo"
                        nextLink="/locations/taipeiChildrenAmusementPark"/>
  );
}

export default GraxCamping;