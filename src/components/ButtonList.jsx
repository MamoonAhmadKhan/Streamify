import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux';

const ButtonList = () => {
  const sidebar = useSelector((store) => store.app.isMenuOpen);

  let buttonNames = ['All', 'Music', 'Podcasts', 'Mixes', 'JavaScript', 'Computer Science', 'Live', 'News', 'Dramas', 'Mughlai Cuisine', 'Travel', 'Comedy'];

  if (sidebar) {
    buttonNames = ['All', 'Music', 'Podcasts', 'Mixes', 'JavaScript', 'Computer Science', 'Live', 'News', 'Dramas', 'Travel'];
  }
  
  return (
    <div className='w-fit px-2 flex whitespace-nowrap'>
      {
        buttonNames.map((item, index) => (
          <Button key={index} name={item} />
        ))
      }
    </div>
  )
}

export default ButtonList