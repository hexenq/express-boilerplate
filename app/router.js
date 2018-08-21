import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/hello', controller.greeting);

export default router;