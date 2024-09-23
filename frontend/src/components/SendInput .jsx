import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
 
  const {message,setMessage}=useState("");
  const dispatch=useDispatch();
  const {selectedUser}=useSelector(store=>store.user);
  const {messages}=useSelector(store=>store.message);

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post(``,{message},{
        headers:{
          'Content-Type':'application.json'
        },
        withCredentials:true
      });//${selectedUser?._.id};
      dispatch(setMessages([...messages,res?.data?.newMessage]))
      
    } catch (error) {
      console.log(error)
    }
    setMessage('');
  }
  return (
    <form onSubmit={onSubmitHandler} action="" className="px-4 my-3">
      <div className="w-full relative ">
        <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
          type="text"
          placeholder="  Write a message..."
          className="border border-zinc-500 text-sm rounded-lg block w-full h-[40px] bg-gray-600 text-white"
        />
        <button type="submit" className="absolute flex inset-y-0 end-0 items-center pr-3"><IoSend size={30}/></button>
      </div>
    </form>
  );
};

export default SendInput;
