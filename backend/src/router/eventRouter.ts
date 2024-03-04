import { Router } from 'express';
import eventController from '../controller/eventController.js';

const router: Router = Router();

router.get('/', eventController.getEvents);

router.post('/', eventController.createEvent);

export default router;