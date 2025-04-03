import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connect to mongoDB")
    } catch (error) {
        console.log("Error connecting to mongoDB: ", error);
    }
}
