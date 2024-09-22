import React from "react";
import SendInput from "./SendInput ";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[800px] flex flex-col">
      <div className="flex gap-2 items-center bg-slate-500 px-4 py-2 mb-2">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726876800&semt=ais_hybrid"
              alt="profile"
            />
          </div>
        </div>
        <div className=" ">
          <div className="">
            <p className="text-gray-800">Dr. Sumit</p>
          </div>
        </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
};

export default MessageContainer;
