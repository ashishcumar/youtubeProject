import React from 'react'
import VideoItem from '../VideoItems/VideoItem'
import Videoitems from './VideoList.module.css'


export default function VideoList({videos,onVideoSelect}) {
    const listOfVideos = videos.map((video,id)=> <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} /> )
    return (
        <>
        <div className={Videoitems.trending}> 
         <span className={Videoitems.trendingItems1}>All</span>
         <span className={Videoitems.trendingItems}>Explore</span>
         <span className={Videoitems.trendingItems}>Shorts</span>
         <span className={Videoitems.trendingItems}>Subscriptions</span>
         <span className={Videoitems.trendingItems}>Library</span>
         <span className={Videoitems.trendingItems}>History</span>
        </div>
        <div className={Videoitems.listContainer} >
            {listOfVideos}
        </div>
        </>
    )
}
