import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { YT_API } from '../utils/youtubeApi';
import { Link } from 'react-router-dom';

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
          <Link key={item.id} to={`/watch?v=${item.id}`} >
          <VideoCard info={item} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer