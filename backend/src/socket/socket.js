import {Server} from "socket.io"
import http from "http"
import express from "express"
import dotenv from "dotenv"


dotenv.config({
    path:"./.env"
})


const app=express()
const server =http.createServer(app)
const io= new Server(server, {
    cors:{
        origin:process.env.BASE_URL,
        method:["GET","POST"]
    },
    
})

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}


const userSocketMap={};


io.on('connection',(socket)=>{
    console.log("user connected" , socket.id)
    const userId=socket.handshake.query.userId
    if(userId!=undefined){
        userSocketMap[userId]=socket.id;
    }

    io.emit('getOnlineUsers',Object.keys(userSocketMap))

    socket.on('disconnect',()=>{
        console.log("user disconnect", socket.id)
        delete userSocketMap[userId]
        io.emit('getOnlineUsers',Object.keys(userSocketMap))
    })

})

export {app, io, server}


