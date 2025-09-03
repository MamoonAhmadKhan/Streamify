import React from 'react'

const VideoCard = (props) => {
  const { snippet, statistics } = props?.info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(props?.info);

  return (
    <div className='m-1 w-80 p-1 cursor-pointer shadow-2xl shadow-black'>
      <div className='cardImage mb-2'>
        <img className='rounded-xl' src={thumbnails.medium.url} alt="thumbnail" />
      </div>
      <div className='cardDetails flex flex-col flex-wrap space-y-1'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <h4 className='text-gray-300 hover:text-white'>{channelTitle}</h4>
        <p>{statistics.viewCount} views</p>
      </div>
    </div>
  )
}

export default VideoCard