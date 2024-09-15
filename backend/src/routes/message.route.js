import express from "express"
import { getMessage, senderMessage } from "../controllers/messageController.js"
import isAuthenticaed from "../middlewares/isAuthenticated.js"


const router=express.Router()


router.route("/send/:id")
    .post(isAuthenticaed ,senderMessage)

router.route("/:id")
    .get(isAuthenticaed, getMessage)

export default router