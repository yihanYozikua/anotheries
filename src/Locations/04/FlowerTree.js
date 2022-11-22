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
    <LocationsTemplate bannerImg={images[96]}  locationIndex={'923'}
                        imgsAll={[images[96], images[97], images[98]]}
                        imgsToShow={[images[97]]}
                        title={['幻想的景色、楽園のような空間、生い茂る緑、自然の美がありのまま。']}
                        description={['シンガポール旅2日目、セントサ島とお別れし、',
                                      'モノレールに乗って国立公園ガーデンズバイザベイにやってきた。',
                                      <br></br>,
                                      '南極以外世界中全ての植物と出会える植物園で誇られて、自然の美がありのまま､素敵な緑の国。',
                                      <br></br>,
                                      '遊園地に行くワクワク感とのとまた違い､',
                                      'こんな豊かな緑に囲まれると､無性に癒しを求めてくる。',
                                      <br></br>,
                                      'ここで私たち一番の目当ては、あの有名なるスーパーツリー・グローブ。',
                                      'シンガポール観光って調べたら、必ず出てくる代表的なシンボル。',
                                      'カラフルな色味、少し変わった形、',
                                      '日暮れると、光と音楽のパフォーマンスに相まって、幻想的な景色を味わえる。',
                                      'ただ見つめているだけで、フェアリーテールの世界に飛び込むような気分になる。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[90]}
                        nextImg={images[93]}
                        prevLink="/locations/umeda"
                        nextLink="/locations/hokkaido"/>
  );
}

export default MapleAwanda;