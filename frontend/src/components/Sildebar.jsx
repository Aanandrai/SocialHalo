import React from 'react'
import { IoSearch } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sildebar = () => {
    const navigate =useNavigate();
    const logoutHandler=async()=>{
        try {
            const res=await axios.get(``);
            navigate("/login");
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form action="" className='flex items-center gap-2'>
        <input className='input input-bordered rounded-md' type="text" placeholder='Search...'/>
        <button type='submit' className='btn btn-circle bg-slate-500'><IoSearch /></button>
      </form>
      <div className='divider px-3'></div>
      <OtherUsers/>
      <div className='mt-2'>
        <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
      </div>
    </div>
  )
}

export default Sildebar
