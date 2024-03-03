import { Request, Response, NextFunction } from 'express';
import moongose from 'mongoose';
import Event from '../model/eventModel.js';

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
    createEvent
}

export default eventController;