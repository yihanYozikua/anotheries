import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType2'


function Fujisan(){
  return(
    <LocationsTemplate bannerImg={images[86]}  locationIndex={'805'}
                        imgsAll={[images[86], images[87], images[88], images[89]]}
                        imgsToShow={[images[86], images[87]]}
                        title={['強く思い続ければ', '幸せな景色がすぐそこまで']}
                        description={['「雪が尽きることがない」',
                                      '「いつもそこにあるご立派な佇まい」',
                                      <br></br>,
                                      '8月の富士山は、そんな印象を丸ごと覆す。',
                                      <br></br>,
                                      'この時期だと、晴れる日の朝5時から7時くらい、雲はまだ空に上がっていない時間帯にしか出てこないって、ゲストハウスのオーナーさんから聞いた。',
                                      <br></br>,
                                      'うすら形しか見えない富士山に向かって、夏休み中にはるばる夜行バスでやってきた私たちはとても歯痒い思い出をした。',
                                      'それでも、翌日は富士山を見るために朝5時起きて、',
                                      '半目で、靴もスリッパのままハウスから出て、',
                                      '外はまだ全然寒いのに、私たちの心にこもった富士山と出会いたい熱意と合わせたらちょうどよかった。',
                                      'そして、予想したより迫力がある富士山と対面した瞬間、',
                                      '私が初めて五感で感動という感情を味わえた。',
                                      'この後友達とはしゃいで、写真を連写したこと、',
                                      '帰りで富士山が見えないまでずっと振り返っていたこと、今でも鮮明に覚えている。',
                                      <br></br>,
                                      'これでまた一つの願いが叶えたな。'
                                    ]}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[67]}
                        nextImg={images[22]}
                        prevLink="/locations/theSideOfTheMountain"
                        nextLink='/locations/naraAndHotel'/>
  );
}

export default Fujisan;