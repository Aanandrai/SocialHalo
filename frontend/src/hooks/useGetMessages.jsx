import React, { useEffect } from 'react'
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '../config';

const useGetMessages = () => {
    const {selectedUser} = useSelector(store=>store.user);
    const { messages } = useSelector(store => store.message);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${BASE_URL}/message/${selectedUser?._id}`);
                // console.log(res?.data?.data?.messages)
                dispatch(setMessages(res?.data?.data?.messages))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
       
        
        
        // console.log(messages)
    }, [selectedUser?._id,setMessages]);
}

export default useGetMessages