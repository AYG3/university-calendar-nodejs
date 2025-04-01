import { Router } from 'express'
import Event from '../mongoose/EventModel.js'

const router = Router()

router.get("/", (req, res) => {
    console.log("Get route")

    return res.status(200).send("Home route")
})

router.post("/api/create", async (req, res) => {
    const { title, date, category } = req.body;

    if (!title || !date || !category) {
        return res.status(400).send({ err_msg: "Missing required fields: title, date, or category" });
    }

    const newEvent = new Event({
        title,
        date,
        category
    });

    console.log("body: ", req.body);

    console.log("data: ", data);
    try {
        const event = await newEvent.save(data)
        console.log("Event", event)

        return res.status(200).send(event)
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send({err_msg: error})
    }
})

export default router;