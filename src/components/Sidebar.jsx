import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const sidebar = useSelector((store) => store.app.isMenuOpen);

  return sidebar === true ? (
    <div className='p-3 w-64 m-1 shadow shadow-white col-span-1'>
      <ul className='mb-4 font-semibold cursor-pointer'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className='text-lg font-semibold cursor-pointer'>Subscriptions</h1>
      <ul className='mb-4'>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>

      <h1 className='text-lg font-semibold cursor-pointer'>Watch Later</h1>
      <ul className='mb-4'>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  ) : (
    null
  );
}

export default Sidebar