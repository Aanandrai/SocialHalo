import React from 'react'
import { IoSearch } from "react-icons/io5";
import OtherUsers from './OtherUsers';

const Sildebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form action="" className='flex items-center gap-2'>
        <input className='input input-bordered rounded-md' type="text" placeholder='Search...'/>
        <button type='submit' className='btn btn-circle bg-slate-500'><IoSearch /></button>
      </form>
      <div className='divider px-3'></div>
      <OtherUsers/>
      <div className='mt-2'>
        <button className='btn btn-sm'>Logout</button>
      </div>
    </div>
  )
}

export default Sildebar
