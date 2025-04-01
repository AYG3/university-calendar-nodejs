import mongoose, { Mongoose } from 'mongoose'

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: () => new Date()
    },

    category: { 
        type: String, 
        enum: ["Sports, Events, Workshops, Services, Seminars"],
        required: true
    },

    department: {
        type: String,
        // required: true
    },

    description: {
        type: String
    }
})

const Event = mongoose.model("Event", EventSchema);
export default Event;