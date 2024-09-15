import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

import userRouter from "./routes/user.router.js"
import messageRouter from "./routes/message.route.js"
app.use("/api/v1/user",userRouter)
app.use("/api/v1/message",messageRouter)
export {app}
