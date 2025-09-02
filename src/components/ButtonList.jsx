import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonNames = ['All', 'Music', 'Podcasts', 'Mixes', 'JavaScript', 'Computer Science', 'Live', 'News', 'Dramas', 'Mughlai Cuisine', 'Travel', 'Comedy'];
  
  return (
    <div className='w-full px-2 flex overflow-x-auto whitespace-nowrap'>
      {
        buttonNames.map((item, index) => (
          <Button key={index} name={item} />
        ))
      }
    </div>
  )
}

export default ButtonList