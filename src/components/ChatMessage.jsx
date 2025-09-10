import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm pt-3 pb-3'>
        <FontAwesomeIcon icon={faCircleUser} size="lg" />
        <span className='font-semibold text-xs px-1'>{name}</span>
        <span className='text-xs pl-2'>{message}</span>
    </div>
  )
}

export default ChatMessage