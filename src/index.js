import express from 'express'
import router from './routes/routes.js'

const app = express();

app.use(express.json())

app.use(router);

const PORT = 3000;

const 

app.listen(PORT, () => {
    console.log("App listening on PORT: ", PORT)
})

