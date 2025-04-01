import { Router } from 'express'
import Event from '../mongoose/EventModel.js'

const router = Router()

router.get("/", (req, res) => {
    console.log("Get route")

    return res.status(200).send("Home route")
})

router.post("/api/create", async (req, res) => {
    const { 
        title,
        date,
        category
    } = req.body

    const newEvent = new Event();

    const data = {
        title,
        date,
        category
    }

    console.log("data: ", data);
    try {
        const event = await newEvent.save(data)
        console.log("Event", event)
    } catch (error) {
        console.log("Error: ", error);
    }
})

export default router;