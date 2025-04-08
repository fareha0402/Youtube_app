import React from 'react'

const VideoCard = ({videoInfo}) => {
if(!videoInfo) return null
const {snippet,statistics} = videoInfo;
const { channelTitle,title,thumbnails} = snippet
const showTitle = () =>{
   return title.length >100 ? title.slice(0,300) : title
}
  return (
    <div className='p-2 m-2 shadow-lg w-90'>
        <img alt='thumbnail' src={thumbnails.medium.url} className='rounded-2xl w-full p-1'></img>
        <ul>
            <li className='font-bold'>{showTitle()}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard