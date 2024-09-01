import asyncHandler from 'express-async-handler';
import { messages } from './homeController.js';

export const pageLoader = asyncHandler(async (req, res) => {
    res.render('newMessage', {title: 'Creating Message'});
});

export const newMessage = asyncHandler(async (req, res) => {
    const { user, message } = req.body;

    if(!user || !message) {
        const error = new Error('User or message is missing');
        error.status = 400;
        throw error;
    }

    messages.push({
        text: message,
        user: user,
        added: new Date()
    });

    res.redirect('/');
});