import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType2'


function Yokoyama(){
  return(
    <LocationsTemplate bannerImg={images[15]}  locationIndex={'202'}
                        imgsAll={[images[86], images[87], images[88], images[89]]}
                        imgsToShow={[images[86], images[87]]}
                        title={['景色との出会いが成長の糧に']}
                        description={['人は、幸せるになる前に、幸せをもたらす言葉を必ず出会っている。',
                                      '大好きなコピーライター、ひすいこたろうさんの話。',
                                      '私にとって、旅の景色もそういうことかもしれない。',
                                      <br></br>,
                                      '美しい景色に魅了される前に、実はもうすでに美しい景色を出会っている。',
                                      '横山展望台の夕焼けを見に行った日はそうだった。',
                                      <br></br>,
                                      '伊勢神宮で新年を迎えたい私と、当時一緒に住んでいた15歳離れているお姉さん、二人で近鉄の格安切符を買って三日間の三重旅に行った。',
                                      '車なしの旅行なので、横山展望台に行くには、片道40分の山登りのみ。',
                                      'これは誰でも通る道でしょうと言い聞かせ、二人ではあはあ言いながら山道を進み、途中の景色を正直何も楽しめなかった。',
                                      <br></br>,
                                      '展望台に着き、ココアを飲みながら夕焼けを待ち、1時間弱滞在したら帰り道へ。',
                                      '下山していた時、左右広がる開放感のある車道、縁石のふちに生えた緑、向こう側の山、行く時全然眼中になかった、山道ならではの景色。',
                                      '実は展望台から見えた景色より、心を動かされたことを気づきた。',
                                      '私はもうすでに美しい景色を出会っている。美しい景色を見える前よりずっと。',
                                      <br></br>,
                                      '新年早々、山道でも展望台でも、曇りが晴れてかけがえのない時間を過ごした。今年も、どうか素敵な一年でありますように。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[99]}
                        nextImg={images[73]}
                        prevLink="/locations/theoutpost"
                        nextLink="/locations/mapleawanda"/>
  );
}

export default Yokoyama;