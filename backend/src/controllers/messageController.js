import { asyncHandler } from "../utils/asyncHandler.js"
import {Conversation} from "../models/conversation.model.js"
import {Message} from "../models/message.model.js"

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

    //Socket IO

    
})