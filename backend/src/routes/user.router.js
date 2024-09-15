import express from "express"
import { getOtherUsers, login, logout, register } from "../controllers/user.controller.js"
import isAuthenticaed from "../middlewares/isAuthenticated.js"

const router =express.Router()

router.route("/signup")
    .post(register)


router.route("/login")
    .post(login)


router.route("/logout")
    .get(logout)


router.route("/getOtherUser")
.get(isAuthenticaed , getOtherUsers)


export default router