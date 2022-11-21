import React, { useState } from "react";
import TopImgReel from "./TopImgReel";
import TopUp from "./TopUp"
import { images } from '../image_compress.ts'

const imgReel = [
  {img: images[92], location: 'Taipei, Taiwan', date: '2021.11', index: '119', url: 'https://yihanyozikua.github.io/anotheries/#/locations/fujousan'},
  {img: images[93], location: 'Hokkaido, Japan', date: '2020.02', index: '001', url: 'https://yihanyozikua.github.io/anotheries/#/locations/hokkaido'},
  {img: images[83], location: 'Kyoto, Japan', date: '2020.03', index: '046', url: 'https://yihanyozikua.github.io/anotheries/#/locations/kamogawa'},
  {img: images[0], location: 'Kyoto, Japan', date: '2020.02', index: '214', url: 'https://yihanyozikua.github.io/anotheries/#/locations/graxglamping'},
  {img: images[67], location: 'Hsinchu, Taiwan', date: '2022.03', index: '237', url: 'https://yihanyozikua.github.io/anotheries/#/locations/theSideOfTheMountain'},
  {img: images[90], location: 'Osaka, Japan', date: '2022.05', index: '423', url: 'https://yihanyozikua.github.io/anotheries/#/locations/umeda'},
  {img: images[70], location: 'Tokyo, Japan', date: '2020.03', index: '321', url: 'https://yihanyozikua.github.io/anotheries/#/locations/shiragawa'},
  {img: images[99], location: 'Singapore', date: '2022.09', index: '???', url: 'https://yihanyozikua.github.io/anotheries/#/locations/theoutpost'},
  {img: images[15], location: 'Mie, Japan', date: '2019.12', index: '202', url: 'https://yihanyozikua.github.io/anotheries/#/locations/yokoyama'},
  {img: images[73], location: 'Nantou, Taiwan', date: '2021.12', index: '112', url: 'https://yihanyozikua.github.io/anotheries/#/locations/mapleawanda'},
  {img: "", location: 'Start scrolling to enjoy the gallery!', date: 'today', index: '000'}
  
]

export default function TopAncestor(){
  const [imgReelCntIdx, setImgReelCntIdx] = useState(0);

  return(
    <>
      <TopImgReel
        imgReel = {imgReel}
        imgReelCntIdx = {imgReelCntIdx}
        handleChangeImgReelCntIdx = {setImgReelCntIdx}
      />
      <TopUp
        index={imgReel[imgReelCntIdx].index}
        date={imgReel[imgReelCntIdx].date}
        location={imgReel[imgReelCntIdx].location}
        url={imgReel[imgReelCntIdx].url}
      />
    </>
  );

}