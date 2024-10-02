import React, { useEffect } from 'react'
import axios from 'axios';
import {useDispatch} from "react-redux";
import {BASE_URL} from "../config"
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUser = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
    const fetchOtherUsers=async ()=>{
        try {
            axios.defaults.withCredentials=true;
            const res=await axios.get(`${BASE_URL}/user/getOtherUser`);
          
            dispatch(setOtherUsers(res.data.data));
            
        } catch (error) {
            console.log(error)
        }
    }
    fetchOtherUsers();
 },[])
}

export default useGetOtherUser
