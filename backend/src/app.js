import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import {app, server} from "./socket/socket.js"


dotenv.config({
    path:"./.env"
})


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
const corsOption={
    origin:process.env.BASE_URL,
    credentials : true

}


app.use(cors(corsOption))

import userRouter from "./routes/user.router.js"
import messageRouter from "./routes/message.route.js"


app.use("/api/v1/user",userRouter)
app.use("/api/v1/message",messageRouter)
export {server, app}
