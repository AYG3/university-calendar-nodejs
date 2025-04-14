import express from 'express'
import router from './routes/routes.js'
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
import cors from "cors"
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();

app.use(express.json())

app.use(cors());    

app.use(router);

const PORT = 3000;

connectDB()


app.listen(PORT, () => {
    console.log("App listening on PORT: ", PORT)
})

