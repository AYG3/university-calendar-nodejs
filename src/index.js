import express from 'express'
import router from './routes/routes.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

app.use(express.json())

app.use(router);

const PORT = 3000;

mongoose.connect
// (`mongodb+srv://gilbertayoku3:${process.env.db_password}@cluster0.tgicb.mongodb.net/`)
mongoose.connect(`mongodb+srv://gilbertayoku3:${process.env.db_password}@cluster0.tgicb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"`);

app.listen(PORT, () => {
    console.log("App listening on PORT: ", PORT)
    console.log(process.env.db_password);
})

