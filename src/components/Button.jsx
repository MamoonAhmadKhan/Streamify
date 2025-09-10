import React from 'react'

const Button = (props) => {
    const { name } = props;

  return (
    <>
    <button className='px-4 font-medium cursor-pointer py-1 rounded-lg m-2 text-white bg-gray-700 focus:bg-gray-300 focus:text-gray-800'>{name}</button>
    </>
  )
}

export default Button