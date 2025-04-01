import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => {
    console.log("Get route")

    return res.status(200).send("Home route")
})

router.post("/api/update", (req, res) => {
    
})

export default router;