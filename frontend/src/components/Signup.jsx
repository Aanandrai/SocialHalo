import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
import {BASE_URL} from "../config";

function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate=useNavigate()


  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const res= await axios.post(`${BASE_URL}/user/signup`,user,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
     
      if(res.data.success){
        navigate("/login")
        toast.success(res?.data?.message)
      }
    } catch (error) {

      toast.error(error.response.data.message)
    }


    setUser({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800">Signup</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Full Name
              </span>
            </label>
            <input
              className="w-full text-gray-800 input input-border border-slate-900 h-10 bg-inherit"
              type="text"
              placeholder="  write full name..."
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Email
              </span>
            </label>
            <input
              className="w-full text-gray-800 input input-border border-slate-900 h-10 bg-inherit"
              type="email"
              placeholder="  write Email..."
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Password
              </span>
            </label>
            <input
              className="w-full text-gray-800 input input-border border-slate-900 h-10 bg-inherit"
              type="text"
              placeholder="  write password..."
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Confirm Password
              </span>
            </label>
            <input
              className="w-full input input-border border-slate-900 h-10 bg-inherit text-gray-800"
              type="password"
              placeholder="  rewrite your password..."
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Signup
            </button>
          </div>
          <Link to="/login" className="text-gray-800 py-2">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );

}
export default Signup;
