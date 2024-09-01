import express from 'express';
import { pageLoader, newMessage } from '../controllers/newMessageController.js';

const router = express.Router();

router.get('/', pageLoader);

router.post('/submit', newMessage);

export default router;