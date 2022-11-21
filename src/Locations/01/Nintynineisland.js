import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType1'


function Nintynineisland(){
  return(
    <LocationsTemplate bannerImg={images[29]}  locationIndex={'099'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[30], images[31]]}
                        title={['九十九島って、', 'ほんとに九十九の島があるの？']}
                        description={['その謎を解けるために、九十九島パールシーリゾートの遊覧船で、',
                                      '自然を間近に体感する1時間を始まった。',
                                      <br></br>,
                                      '船で揺られていて、解説アナウンスを聞いたら、',
                                      '九十九島って、本当は大小208の島があることがわかった。',
                                      'そして、「九十九」とは「数えきれないほどたくさん」のという意味。',
                                      <br></br>,
                                      '208の島に、いくつかの有人島がある。',
                                      '島に住むって、どういう感じなんだろう。',
                                      'これは都会っ子マウントではないよ、シンプルに知らない世界に興味が湧いただけ。きっと、穏やかな毎日を過ごせるのだろう。',
                                      <br></br>,
                                      'たまに都会から島に逃げたいかも。',
                                      '208でも、99でも、そんなに島があるなら、一つだけ貸してくれないかな笑。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        coverImgPosition={'center center'}
                        prevImg={images[40]}
                        nextImg={images[0]}
                        prevLink="/locations/naraAndHotel"
                        nextLink="/locations/graxglamping"/>
  );
}

export default Nintynineisland;