import { Request, Response, NextFunction } from 'express';
import moongose from 'mongoose';
import Event from '../model/eventModel.js';

const getEvents = async (req: Request, res: Response) => {

    try{
        const events = await Event.find({}).sort({data: -1});
        res.status(200).json(events);

    }catch(error){
        res.status(404).json({error});
    }
}

const createEvent = async (req: Request, res: Response) => {
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

const eventController = {
    getEvents,
    createEvent
}

export default eventController;