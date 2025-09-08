import React from 'react'

const VideoCard = (props) => {
  const { snippet, statistics } = props?.info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='m-1 mb-3 h-full w-80 p-3 pb-4 rounded-2xl cursor-pointer shadow-lg shadow-black'>
      <div className='cardImage mb-2 pt-2'>
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