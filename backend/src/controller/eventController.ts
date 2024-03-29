import { Request, Response} from 'express';
import mongoose from 'mongoose';
import Event from '../model/eventModel.js';

const getEvents = async (req: Request, res: Response) => {

    const now: Date = new Date();

    try{
        const events = await Event.find({date: {$gte: now}}).sort({date: 1});
        res.status(200).json(events);

    }catch(error){
        res.status(404).json({error});
    }
}

const getAllEvents = async (req: Request, res: Response) => {

    try{
        const events = await Event.find({}).sort({date: 1});
        res.status(200).json(events);

    }catch(error){
        res.status(404).json({error});
    }
}

const getEvent = async (req: Request, res: Response) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'});
    }

    try{
        const event = await Event.findById(id);

        if(!event){
            return res.status(404).json({error: 'No such event'});
        }

        res.status(200).json(event);

    }catch(error){
        res.status(404).json({error});
    }
}

const createEvent = async (req: Request, res: Response) => {

    const body: Event = req.body as Event;
    let emptyFields: string[] = [];

    for(let prop in body) {

        const propValue: any = body[prop as keyof Event];

        if(!propValue){
            emptyFields.push(prop);
        }
    }

    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try{
    
        const {title, artist, city, country, location, date} :{
            title: string;
            artist: string;
            city: string;
            country: string;
            location: string;
            date: Date;
        } = req.body;

        const event = await Event.create({title, artist, city, country, location, date});
        res.status(201).json(event);
        
    }catch(error){

        res.status(500).json({error});
    }
}

const updateEvent = async (req: Request, res: Response) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'});
    }

    try{
        const event = await Event.findOneAndUpdate({_id: id}, req.body);

        if(!event){
            return res.status(404).json({error: 'No such event'});
        }

        res.status(200).json(event);

    }catch(error){
        res.status(404).json({error});
    }
}

const deleteEvent = async (req: Request, res: Response) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'});
    }

    try{
        const event = await Event.deleteOne({_id: id});

        if(!event){
            return res.status(404).json({error: 'No such event'});
        }

        res.status(200).json(event);

    }catch(error){
        res.status(404).json({error});
    }
}

const eventController = {
    getEvent,
    getAllEvents,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

export default eventController;