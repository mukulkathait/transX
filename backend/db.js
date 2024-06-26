import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb://localhost:27017/paytm`)
        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log("\nMongoDB Connected !! DB HOST : ", connectionInstance.connection.host)
    } catch (error) {
        console.error("Error during DB Connection : ", error)
        process.exit(1)
    }
}

export default connectDB;