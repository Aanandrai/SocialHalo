import React from 'react'
import Sildebar from './Sildebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sildebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage
