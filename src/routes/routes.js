import { Router } from 'react-router'

const router = Router()

router.get("/", (res, req) => {
    console.log("Get route")

    return res.status(200).send("Home route")
})

export default router;