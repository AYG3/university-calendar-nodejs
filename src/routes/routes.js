import { Router } from 'express'
import Event from '../mongoose/EventModel.js'

const router = Router()

//get event
router.get("/api/events", async (req, res) => {

    try {
        const getEvents = await Event.find();
        if((getEvents == [])) return res.status(404).send("No event found")
        
        return res.status(200).send({ events: getEvents})
    } catch (error) {
        console.log("Error getting Events: ", error);
        return res.status(500).send({ err_msg: error})
    }
})

//create event
router.post("/api/create", async (req, res) => {
    const { title, date, category } = req.body;

    if (!title || !category) {
        return res.status(400).send({ err_msg: "Missing required fields: title, or category" });
    }

    const newEvent = new Event({
        title,
        date,
        category
    });

    console.log("body: ", req.body);

    try {
        const event = await newEvent.save();
        console.log("Event", event);

        return res.status(200).send(event)
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send({err_msg: error})
    }
})

router.put("api/update", async(req, res) => {
    const { body: {title, date, category} } = req

    const newData = {
        title,
        ...updatedEvent
    }

    try {
        const updateEvent = await Event.findByIdAndUpdate(id, { updatedEvent }, { new: true });
    } catch (error) {
        
    }
})

export default router;