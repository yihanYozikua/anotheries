import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
// import { images } from './image_data.ts'
import { images } from '../../image_compress.ts'
import { placeholderImgs } from '../../image_placeholder.ts'
import { Link } from 'react-router-dom';

import LocationsTemplate from '../../Template/LocationsType3'


function TaipeiChildrenAmusementPark(){
  return(
    <LocationsTemplate bannerImg={images[53]}  locationIndex={'318'}
                        imgsAll={[images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]]}
                        imgsToShow={[images[53], images[54]]}
                        title={['それは儚くて、', '今でも消えそうな思い出になった。']}
                        description={['子供の頃、親が忙しいか、そもそもそういうタイプの人ではないか、',
                                      '一緒に出かけるなんて、あまりなかった。',
                                      'だから私は大体ひそやかに生きていて、',
                                      '興奮することなんてそうそうあるもんじゃなかった。',
                                      <br></br>,
                                      'その時、唯一テンションを上げてくれたのは兒童樂園に行くことだった。',
                                      'アトラクションごとに半券を買うシステムで、これは20元、これは30元、これは50元だから一回だけねっt色。',
                                      '青で、正方形のチケット、今でも覚えている。',
                                      '私はメリーゴーランドで、兄は空中ブランコが好きだった。',
                                      <br></br>,
                                      'その遊園地は私が大学生の時にリニューアルされて、今の兒童新樂園になった。入り口でチケットと一緒に買わないといけない半券もいらなくなってしまい、今はメトロのICカードと連携しているので、ピってすっと乗れた。',
                                      'デジタルの進化と共に、思い出も上書きされる。',
                                      'ちょっと寂しいけど、私は子供の頃遊べなかった分、取り返せるような勢いで、兒童新樂園に何回も行った。',
                                      <br></br>,
                                      '兒童樂園と過ごした時間、それは儚くて、今でも消えそうな思い出になった。']}
                        tips={['自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。', '自分でテントを組むことも楽しめたいようであれば、予約の時に必ず言ってください。当日オーナーさんは教えてくれます。']}
                        moreAboutThere={['山的那一邊露營地', 'https://m.icamping.app/store/sdny431',
                                          <br></br>,'山的那一邊露營地', 'https://m.icamping.app/store/sdny431']}
                        coverImg={images[0]}
                        prevImg={images[70]}
                        nextImg={images[90]}
                        prevLink="/locations/shiragawa"
                        nextLink="/locations/theoutpost"/>
  );
}

export default TaipeiChildrenAmusementPark;