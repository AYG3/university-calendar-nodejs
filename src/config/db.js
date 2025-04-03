import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGOURI)
        console.log("Connect to mongoDB")
    } catch (error) {
        console.log("Error connecting to mongoDB")
    }
}
