import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType4'


function MapleAwanda(){
  return(
    <LocationsTemplate bannerImg={images[73]}  locationIndex={'112'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[74]]}
                        title={['これは我が台湾式の秋。']}
                        description={['台湾で紅葉を見に行くなら中部にある、奧萬大という森林公園一択。',
                                      'しかし、そこにたどり着くには車と強運が必須。',
                                      'なぜかというと行くまでの山道も、敷地内の宿の予約も厳しい戦いだ。',
                                      <br></br>,
                                      'でも、世の中はそういうものだ、苦労した分、見返りがある。',
                                      '連続三日間パソコンの前に予約のシミュレーションをし、',
                                      'レンタカー会社に鬼電した結果、奧萬大で一泊二日の旅行を決行！',
                                      <br></br>,
                                      '山の上ならではの落ち着く雰囲気、美味しい空気、',
                                      'そして、街に見かけない、真っ赤の紅葉。',
                                      '時の流れを忘れ、目の前にもの、肌で感じたものをひたすら楽しんでいた。',
                                      <br></br>,
                                      '正直、台湾はまだ暖かい国なので、思っていた紅葉と少し物足りなさがあるけど、これは我が台湾式の秋。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[15]}
                        nextImg={images[8]}
                        prevLink="/locations/yokoyama"
                        nextLink="/locations/shonan"/>
  );
}

export default MapleAwanda;