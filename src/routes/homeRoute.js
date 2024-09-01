import express from 'express';
import { getMessages } from '../controllers/homeController.js';

const router = express.Router();

router.get('/', getMessages);

export default router;