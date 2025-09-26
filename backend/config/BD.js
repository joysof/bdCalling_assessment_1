import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.MONGO_URL

)
const connectDB = async () =>{
    try {
        console.log("mogo url" ,process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongoDb connect successfully")
        
    } catch (error) {
       console.log(error)
       process.exit(1) 

    }
}

export default connectDB