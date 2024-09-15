import {app} from "./src/app.js"
import dotenv from "dotenv"
import connectDB from "./src/db/connectDb.js"


dotenv.config({
    path:"./.env"
})

const PORT=process.env.PORT || 7000

connectDB()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log("app is listine")
        })

        app.on("error",(error)=>{
            console.log(error)
        })

        console.log("server is listning at port ", PORT)
    })
    .catch((err)=>{
        console.log(`Database connection error:` ,err)
    })

