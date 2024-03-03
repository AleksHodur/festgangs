import { Router } from 'express';
import eventController from '../controller/eventController.js';

const router: Router = Router();

router.post('/', eventController.createEvent);

export default router;