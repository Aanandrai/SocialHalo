import express from "express"

const router=express.Router()


router.route("/send/:id")
    .post()

export default router