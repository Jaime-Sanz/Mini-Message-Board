import asyncHandler from 'express-async-handler';

export const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
  ];

  export const getMessages = asyncHandler(async (req, res) => {
    if(!messages || messages.length === 0) {
      const error = new Error('Messages not found');
      error.status = 404;
      throw error;
    }
    res.render('home', {messages: messages, title: 'Home Page'});
  });