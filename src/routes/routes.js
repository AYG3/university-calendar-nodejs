import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => {
    console.log("Get route")

    return res.status(200).send("Home route")
})

router.post("/api/create", (req, res) => {
    const { 
        title,
        date,
        category
    } = req.body
})

export default router;