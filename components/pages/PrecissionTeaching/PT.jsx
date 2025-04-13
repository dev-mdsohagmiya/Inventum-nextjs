// MainPage.js
import VideoPlayer from "./components/Videoplayer.jsx";
import NOld from "./components/nOld.jsx";
import ScrollNew from "./components/scrollNew.jsx";

export default function PT({ novideo }) {
  return (
    <div className="bg-dl">
      {novideo ? <></> : <VideoPlayer />}
      <NOld />
      <ScrollNew />
    </div>
  );
}
