import express from 'express'
import router from './routes/routes.js'

const app = express()

app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App listening on PORT: ", PORT)
})

