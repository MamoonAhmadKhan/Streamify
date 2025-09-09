import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Comment = (props) => {
    const { name, text } = props.data;

  return (
    <div className='flex space-x-3'>
        <div>
        <FontAwesomeIcon icon={faUserTie} size="2xl" />
        </div>
        <div className='flex flex-col'>
            <p className='font-semibold'>{name}</p>
            <p className='font-light text-sm break-words'>{text}</p>
        </div>
    </div>
  )
}

export default Comment