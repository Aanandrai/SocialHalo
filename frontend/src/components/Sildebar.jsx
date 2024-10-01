import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';


const Sildebar = () => {
  const {otherUsers}=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const[search,setSearch]=useState("");
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
    const searchSubmitHandler=(e)=>{
      e.preventDefault();
      const conversationUser=otherUsers?.find((user)=>user?.toLowerCase().includes(search.toLowerCase()));
      if(conversationUser){
        dispatch(setOtherUsers([conversationUser]));
      }else{
        toast.error("User not found");
      }
    }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form onSubmit={searchSubmitHandler} action="" className='flex items-center gap-2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='input input-bordered rounded-md' type="text" placeholder='Search...'/>
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
