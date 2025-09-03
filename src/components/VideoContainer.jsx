import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { YT_API } from '../utils/youtubeApi';

const VideoContainer = () => {
  const [ytData, setYtData] = useState([]);

  const fetchYTData = async () => {
    const res = await fetch(YT_API);
    const data = await res.json();
    setYtData(data.items);
  }

  useEffect(() => {
    fetchYTData();
  }, []);

  return (
    <div className='flex flex-wrap ml-2 mt-4'>
      {
        ytData.map((item) => (
          <VideoCard key={item.id} info={item} />
        ))
      }
    </div>
  )
}

export default VideoContainer