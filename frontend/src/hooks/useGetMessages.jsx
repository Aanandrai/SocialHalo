import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice';
import {BASE_URL} from "../config"


const useGetMessages = () => {
    const {selectedUser} =useSelector(store=>store.user);
    const dispatch =useDispatch();
  useEffect(()=>{
    const fetchMessages=async()=>{
        try {
            axios.defaults.withCredentials=true;
            const res =await axios.get(`${BASE_URL}/message/${selectedUser?._id}`)//${selectedUser?._id}
           
            dispatch(setMessages(res?.data?.data?.messages))
        } catch (error) {
            console.log(error);
        }
    }
    fetchMessages();
  },[selectedUser,setMessages])
}

export default useGetMessages
