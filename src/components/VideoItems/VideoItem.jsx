import React from "react";
import VideoItemsCss from "./VideoItems.module.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <>
          <div className={VideoItemsCss.sideVideo} onClick={() => onVideoSelect(video)}>
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            <b> {video.snippet.title} <br></br>
               <p>
               {parseInt((Math.random())*100)}K - {parseInt((Math.random())*11)} months ago
               </p> 
             </b>
          </div>
    </>
  );
};

export default VideoItem;
