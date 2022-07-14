import React from "react";
import VideoDetailCss from "./VideoDetails.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const date = video.snippet.publishedAt;
  const name = `https://robohash.org/${video.snippet.channelTitle}?set=set2`;

  return (
    <>
      <div className={VideoDetailCss.mainVideoContainer}>
        <iframe
          className={VideoDetailCss.iframe}
          title="Video Player"
          src={videoSrc}
        ></iframe>
        <div className={VideoDetailCss.typoGraphyContainer}>
          <b className={VideoDetailCss.videoTitle}> {video.snippet.title}</b>
          <div>
            <b className={VideoDetailCss.viewsDate}>
              {parseInt(Math.random() * 100000000)} views - {date.split("T")[0]}
              <p>
                {" "}
                <ThumbUpOffAltIcon
                  className={VideoDetailCss.icons}
                  fontSize="medium"
                />{" "}
                <span>{parseInt(Math.random() * 100)}k </span>
                <ThumbDownOffAltIcon
                  className={VideoDetailCss.icons}
                  fontSize="medium"
                />{" "}
                <span>DISLIKE</span>
                <SendOutlinedIcon
                  className={VideoDetailCss.icons}
                  fontSize="medium"
                />{" "}
                <span>SHARE </span>
                <ContentCutOutlinedIcon
                  className={VideoDetailCss.icons}
                  fontSize="medium"
                />{" "}
                <span>CLIP </span>
                <PlaylistAddOutlinedIcon
                  className={VideoDetailCss.icons}
                  fontSize="medium"
                />{" "}
                <span>SAVE</span>
                <MoreHorizOutlinedIcon
                  className={VideoDetailCss.icons}
                  fontSize="medium"
                />
              </p>
            </b>
            <div className={VideoDetailCss.loremtext}>
              <div className={VideoDetailCss.loremtextContent}>
                <div className={VideoDetailCss.profilePicContainer}>
                  <div className={VideoDetailCss.profilePictextBox}> 
                  <img
                    className={VideoDetailCss.profilePic}
                    src={name}
                    alt="profilepic"
                  />
                  {video.snippet.channelTitle} <br></br>
                  {parseInt(Math.random() * 1154115)} subscribers
                  </div>
                  <div className={VideoDetailCss.suscribeButton}>
                    <img
                      src="https://i.pinimg.com/736x/bf/ff/e1/bfffe1b3385f58d70a2ad6613f3b7d5b.jpg"
                      className={VideoDetailCss.youtubeICon}
                      alt="subscribeBtn"
                    />
                  </div>
                </div>
                <div className={VideoDetailCss.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                sequi asperiores recusandae iusto officia quo blanditiis
                temporibus, non fugit laudantium odio quibusdam nostrum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
