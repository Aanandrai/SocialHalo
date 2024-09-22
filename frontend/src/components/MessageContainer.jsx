import React from "react";
import SendInput from "./SendInput ";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const {selectedUser}=useSelector(store=>store.user);
  return (
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
  );
};

export default MessageContainer;
