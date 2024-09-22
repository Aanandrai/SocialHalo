import React from 'react'

const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-zinc-500 rounded-sm p-2 cursor-pointer">
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
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  )
}

export default OtherUser
