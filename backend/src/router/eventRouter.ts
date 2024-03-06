import { Router } from 'express';
import eventController from '../controller/eventController.js';

const router: Router = Router();

router.get('/', eventController.getEvents);

router.get('/all', eventController.getAllEvents);

router.get('/:id', eventController.getEvent);

router.post('/', eventController.createEvent);

router.patch('/:id', eventController.updateEvent);

router.delete('/:id', eventController.deleteEvent);

export default router;