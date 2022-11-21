import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType6'


function BookAndBedTokyoIkeBuKuRo(){
  return(
    <LocationsTemplate bannerImg={images[63]}  locationIndex={'460'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[63], images[64], images[65], images[66]]}
                        title={['本のある暮らし']}
                        description_left={['私は本を読むことを趣味にする人ではない。',
                                      '正直に言うと、夏休み宿題に読書感想文がなかったら、私は永遠に本を読まないだろう。',
                                      <br></br>,
                                      'そんな私でも、初めてBOOK AND BED TOKYOと出会ったとき、珍しくテンションが上がた。',
                                      'ここで、本はただの読みのもではない、ベットフレーズ、天井の飾り、壁の一部にもなれる。',
                                      '非日常感を味わえる人がいれば、本へ敬意が払っている人にしたら卒倒するかもしれない。',
                                      <br></br>]}
                        description_right={['表紙がかわいいものを手にして、パラパラページをめぐって、',
                                      '面白そうかな、いつか読みたいかなって思いながら、すぐ別の本で手を出した。こうやって文学少女を装って、本を読んでいる風にして、',
                                      '本棚に3往復して、気がついたらそろそろ寝る時間が来た。',
                                      <br></br>,
                                      'また泊まりに行きたいね、今度はちゃんと一冊の絞って読むように。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[75]}
                        nextImg={images[170]}
                        prevLink="/locations/ine"
                        nextLink="/locations/shiragawa"/>
  );
}

export default BookAndBedTokyoIkeBuKuRo;