import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
const { useEffect, useState } = React;
var App = (props) => {
  const [allVideos, setAllVideos] = useState ([]);
  const [currVideo, setCurrVideo] = useState (exampleVideoData[0]);

  var handleSearchInput = function(input) {
    searchYouTube(input, (data) => {
      setAllVideos(data);
      setCurrVideo(data[0], data[1]);
    });
  };

  useEffect(() => {
    searchYouTube('', (data) => {
      setAllVideos(data);
      setCurrVideo(data[0]);
    });
  }, []);

  return ( <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search handleInput={handleSearchInput}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={currVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={allVideos} setCurrVideoFn={setCurrVideo}/>
      </div>
    </div>
  </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

