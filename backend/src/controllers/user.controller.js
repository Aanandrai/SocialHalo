import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"

export const register=asyncHandler(async(req,res)=>{

    const {fullName,email,password , confirmPassword ,gender}=req.body 
 

    if([fullName,email,password, confirmPassword, gender].some((field)=>
        field?.trim()=="" || field?.trim()==undefined)
    ){
        throw new ApiError(400,"all fields are required")
    }

    if(password!=confirmPassword){
        throw new ApiError(400, "Password and confirmPassword Mismatch")
    }

    const existedUser=await User.findOne({email})
    
   
    if(existedUser){
        throw new ApiError(404, "User Already Exist")
    }
    const maleProfielPhoto=`https://avatar.iran.liara.run/public/boy?username;${email}`
     const femaleProfielPhoto=`https://avatar.iran.liara.run/public/girl?username;${email}`

    const user= await User.create({
        fullName,email,password,gender,
        profilePhoto:gender=="male"?maleProfielPhoto:femaleProfielPhoto
    })
    return res.status(200).json(new ApiResponse(200, user, "User is registered Successfully"))

})

export const login =asyncHandler(async(req,res)=>{
    const {email, password}=req.body

 
    if(
        [email , password ].some((field)=>
            field?.trim()==""|| field?.trim()==undefined
        )
    )
    {

        throw new ApiError(400, "All fields are required")
    }

    const user=await User.findOne({email})
    if(!user){
        throw new ApiError(404,"User not found" )
    }

    

    const isPasswordValid= await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiError(401 , "Password is incorrect")
    }

    const token=await user.generateAccessToken()

    user.password = undefined

    const options={
        httpOnly:true,
        secure:false
    }
    return res.status(200).cookie("token",token , options).json(new ApiResponse(200,user , "User login successfully"))

})

export const logout =asyncHandler(async(req,res)=>{
    return res.status(200).cookie("token","",{maxAge:0}).json(new ApiResponse(200,"","loged out successfully"))
})


export const getOtherUsers=asyncHandler(async(req,res)=>{
    const loggedInUserId=req.id 

    const otherUser=await User.find({_id:{$ne:loggedInUserId}}).select("-password")

    return res.status(200).json(new ApiResponse(200, otherUser, "getting other user Success"))
})
