import React, { useEffect } from 'react'
import { YT_API } from '../utils/youtubeApi';

const VideoContainer = () => {
  const fetchYTData = async () => {
    const res = await fetch(YT_API);
    //const data = await res.json();
    console.log(res);
  }

  useEffect(() => {
    fetchYTData();
  }, []);

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer