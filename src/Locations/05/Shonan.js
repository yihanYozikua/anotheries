import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType5'


function Shonan(){
  return(
    <LocationsTemplate bannerImg={images[0]}  locationIndex={'080'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[8], images[9], images[10], images[11], images[12], images[13]]}
                        title={['行くぜ、湘南']}
                        description_left={['夏のメンバーは、',
                                            '海、風、サーフィン少年。',
                                            <br></br>,
                                            '私の湘南に対するイメージは全部、ドラマ「好きな人がいること」からのものである。',
                                            '江ノ島電鉄で揺られていて、',
                                            '鎌倉に行きたいな、海の散歩が楽しそうだな、',
                                            '美咲と夏向の恋、海水のようなピュアで、素敵なお話だなって、',
                                            '湘南に対するワクワク感はもう、ピークに至った。',
                                            '聖地巡りまでではないけど、ドラマ出った場所を中心に回った。',
                                            <br></br>,
                                            'イメージ通りで、しらす丼が美味しいし、',
                                            '海も透き通っているし綺麗いで、息抜きにして最適な場所。',
                                            <br></br>,
                                            'ここでもう一つの夏を過ごしたい。']}
                        description_right={['',
                                      <br></br>,
                                      '']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[73]}
                        nextImg={images[16]}
                        prevLink="/locations/mapleawanda"
                        nextLink="/locations/tokyoTower"/>
  );
}

export default Shonan;