import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType5'


function GraxGlamping(){
  return(
    <LocationsTemplate bannerImg={images[0]}  locationIndex={'214'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        title={['人生初めてのグランピング', 'ハマりそう。']}
                        description_left={['ここで言ってしまうと、年齢の暴露になるが、',
                                          '私の時代にはグランピングという斬新的な遊び方はなかった。',
                                          '装備を揃って、テントを建って、食材を用意して調理して、楽しい時間だけを過ごした後に全部片付けないといけなくて、キャンプって、とても楽しいと思う一方、ひどく疲れること。',
                                          'そんな概念を覆したのは今回の目的地、京都るり渓温泉にあるGRAX PREMIUM CAMP RESORT。',
                                          <br></br>,
                                          '装備や食材を持参する必要がなく、手ぶらで行けるし、テントもすでに建ってある。',
                                          'いや、あれはテントではない、家だ。',
                                          'だって、こたつまであるもん。',
                                          'GRAXのいいことは、キャンプ以外も楽しめるイベントがたくさんあること。',
                                          '夏には釣り、冬にはイルミネーション、もちろん、隣のるり渓温泉も好きな時間に浸かることができる。',
                                          'もちろん、今までのキャンプも楽しかったよ。',
                                          'でもグランピングを一回体験したら、この楽さに負けてどんどんハマっちゃいそう。']}
                        description_right={['',
                                      <br></br>,
                                      '']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[29]}
                        nextImg={images[75]}
                        prevLink="/locations/nintynineisland"
                        nextLink="/locations/ine"/>
  );
}

export default GraxGlamping;