import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData?.items);
  };
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link  key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard videoInfo={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
