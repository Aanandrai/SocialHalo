import { asyncHandler } from "../utils/asyncHandler.js"
import {Conversation} from "../models/conversation.model.js"
import {Message} from "../models/message.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

export const senderMessage=asyncHandler(async(req,res)=>{
    const senderId=req.id 
    const receiverId=req.params.id 

    const {message}=req.body 
   
    let gotConversation=await Conversation.findOne({
        participants:{$all:[senderId , receiverId]}
    })
  
    if(!gotConversation){
        gotConversation=await Conversation.create({
            participants:[senderId, receiverId]
        })
    }
  
    const newMessage=await Message.create({
        senderId,
        receiverId,
        message
    })
  
    if(newMessage){ 
        gotConversation.messages.push(newMessage._id)
    }

    await gotConversation.save()

    res.status(200).json(new ApiResponse(200, gotConversation,"success"))
    //Socket IO


})


export const getMessage=asyncHandler(async(req,res)=>{
    const receiverId=req.params.id
    const senderId=req.id
    const conversation=await Conversation.findOne({
        participants:{$all :[senderId, receiverId]}
    }).populate("messages")

    return res.status(200).json(new ApiResponse(200, conversation,"get message successfull"))
})