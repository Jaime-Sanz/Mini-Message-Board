import express from 'express';
import { GetLoadMessages, getNewMessages, postNewMessages } from '../controllers/messageControllers.js';

const router = express.Router();

router.get('/', GetLoadMessages);
router.get('/new', getNewMessages);
router.post('/new', postNewMessages);

export default router;