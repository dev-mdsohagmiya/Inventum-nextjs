// MainPage.js
import React from 'react';
import VideoPlayer from './components/Videoplayer.js';
import NOld from './components/nOld.js';
import ScrollNew from './components/scrollNew.js';

export default function PT({novideo}) {
  return (
    <div className='bg-dl'>
      {
        novideo ?
        <></>
        : <VideoPlayer />
        }
      <NOld />
      <ScrollNew />
    </div>
  );
};

