import mongoose from "mongoose"

const connectDB= async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.DATABASE_URI}`)
        console.log(`database is connected at ${connectionInstance.connection.host}`)
    }
    catch(err){
        console.log(`database connection error ${err}`)
        process.exit(1)
    }
}

export default connectDB