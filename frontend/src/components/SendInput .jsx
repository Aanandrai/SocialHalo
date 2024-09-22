import React from "react";
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form action="" className="px-4 my-3">
      <div className="w-full relative ">
        <input
          type="text"
          placeholder="  Write a message..."
          className="border border-zinc-500 text-sm rounded-lg block w-full h-[40px] bg-gray-600 text-white"
        />
        <button className="absolute flex inset-y-0 end-0 items-center pr-3"><IoSend size={30}/></button>
      </div>
    </form>
  );
};

export default SendInput;
