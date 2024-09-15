import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils/asyncHandler.js'

 const isAuthenticaed =asyncHandler(async(req,res,next)=>{
    const token=req.cookies.token

    if(!token){
        throw new ApiError(401,"User not authenticated")
    }

    const decode=await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    if(!decode)
        throw new ApiError(401, "Invalid token")

    req.id=decode._id 
    next()
})

export default isAuthenticaed