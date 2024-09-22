import React, { useEffect } from 'react'
import axios from 'axios';

const useGetOtherUser = () => {
 useEffect(()=>{
    const fetchOtherUsers=async ()=>{
        try {
            axios.defaults.withCredentials=true;
            const res=await axios.get(``);
            console.log(res);
            
        } catch (error) {
            console.log(error)
        }
    }
    fetchOtherUsers();
 },[])
}

export default useGetOtherUser
