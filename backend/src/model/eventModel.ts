import mongoose, { Schema } from 'mongoose';

interface IEvent {
    title: string,
    artist: string,
    city: string,
    country: string,
    location: string,
    date: Date
}

const eventSchema: Schema = new Schema<IEvent>({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Event', eventSchema);