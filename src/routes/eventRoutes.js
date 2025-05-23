import { Router } from "express";
import Event from "../mongoose/EventModel.js";

const router = Router()

//get event
router.get("/api/events", async (req, res) => {
    const { category, department, startDate, endDate } = req.query;

    const filter = {};

    if ( category && category !== "Category"){
        filter.category = category;
    }
    
    if (department && department !== "Department") {
        filter.department = department
    }

    if (startDate) {
        filter.date = { ...filter.date, $gte: new Date(startDate) }
    }

    if (endDate) {
        filter.date = { ...filter.date, $lte: new Date(endDate) }
    }

    try {
        const getEvents = await Event.find(filter);
        if((getEvents == [])) return res.status(404).send("No event found")
        
        return res.status(200).send(getEvents);
    } catch (error) {
        console.log("Error getting Events: ", error);
        return res.status(500).send({ err_msg: error})
    }
})

//create event
router.post("/api/events", async (req, res) => {
    const { title, date, category, department, ...others } = req.body;

    if (!title || !category || !department) {
        console.log("Missing field err: ", error);
        return res.status(400).send({ err_msg: "Missing required fields: title, or category or department" });
    }

    const newEvent = new Event({
        title,
        category,
        ...others,
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

//update event
router.put("/api/event/:id", async(req, res) => {
    const { params: { id } } = req;
    const { body: { title, date, category, department, description } } = req;

    const newData = {
        title,
        date,
        category,
        department,
        description
    }

    try {
        const updateEvent = await Event.findByIdAndUpdate(id, newData, { new: true, runValidators: true });
        if(!updateEvent) return res.status(404).send({err_msg: "Event not updated"});
        
        return res.status(200).send(updateEvent);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ err_msg: error });
    }
})

//delete event
router.delete("/api/events/:id", async (req, res) => {
    const { id } = req.params
    try {
        const findEvent = await Event.findByIdAndDelete(id)
        if(!findEvent) return res.status(404).send("Event not found")
            
        return res.status(200).send({Event_deleted: findEvent})
        } catch (error) {
            console.log(error)
            return res.status(500).send({ err_msg: error });
    }

})

export default router;