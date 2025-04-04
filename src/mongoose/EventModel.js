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
        enum: ["Sports", "Events", "Workshops", "Services", "Seminars", "General Announcements"],
        required: true
    },

    department: {
        type: String,
        enum: ["General", "Computer Science", "Mathematics", "Engineering", "Business"]
    },

    description: {
        type: String
    }
})

const Event = mongoose.model("Event", EventSchema);
export default Event;