import React, { useEffect } from "react";
import SendInput from "./SendInput ";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
    const {selectedUser,onlineUsers}=useSelector(store=>store.user);
    const dispatch=useDispatch();
   
    const isOnline=onlineUsers?.includes(selectedUser?.id)
  return (
    <>
    {
      selectedUser?(
        <div className="md:min-w-[800px] flex flex-col">
        <div className="flex gap-2 items-center bg-slate-500 px-4 py-2 mb-2">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img
                src={selectedUser?.profilePhoto}
                alt="profile"
              />
            </div>
          </div>
          <div className=" ">
            <div className="">
              <p className="text-gray-800">{selectedUser?.fullName}</p>
            </div>
          </div>
        </div>
        <Messages/>
        <SendInput/>
      </div>
      ):( <div className="md:min-w-[800px] flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-800">Let's start conversation</h1>
        </div>
      )
    }
    </>
   
  );
};

export default MessageContainer;
