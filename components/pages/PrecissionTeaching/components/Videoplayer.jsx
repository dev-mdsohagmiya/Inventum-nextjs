// VideoPlayer.js
"use client";
import Vimeo from "@u-wave/react-vimeo";

const VideoPlayer = () => {
  return (
    <div className="pt-36 flex flex-col items-center">
      <h1 className="text-center font-bold bg-pg bg-clip-text text-transparent text-6xl pb-4 mx-auto max-w-6xl pt-8">
        How Precision Teaching maximally helps our students.
      </h1>
      <Vimeo
        video={"943149420"}
        autoplay
        className={`flex justify-center w-11/12 items-start h-max -mt-20 sm:-mt-10 md:mt-0`}
        width={"1000"}
        height={"600"}
      />
    </div>
  );
};

export default VideoPlayer;
