import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch =useDispatch();
    const {selectedUser} =useSelector(store=>store.user);
    const selectedUserHandler=(user)=>{
        dispatch(setSelectedUser(user));
    }
  return (
    <div>
      <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id===user?._id?'bg-zinc-500':''}flex gap-2 items-center hover:bg-zinc-500 rounded-sm p-2 cursor-pointer`}>
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src={user?.profilePhoto}
              alt="profile"
            />
          </div>
        </div>
        <div className=" ">
          <div className="">
            <p className="text-gray-800">{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  )
}

export default OtherUser
