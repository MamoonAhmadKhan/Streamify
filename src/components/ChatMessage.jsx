import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm pt-5'>
        <FontAwesomeIcon icon={faCircleUser} size="lg" />
        <span className='font-semibold text-sm px-2'>{name}</span>
        <span className='text-xs'>{message}</span>
    </div>
  )
}

export default ChatMessage