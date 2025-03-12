const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

export function GetLoadMessages(req, res) {
    res.render("messageBoard", {title: "Mini Message Board", messages: messages});
}

export function getNewMessages(req, res) {
    res.render("newMessage");
}

export function postNewMessages(req, res,) {
    messages.push({ text: req.body.messageText, user: req.body.userID, added: new Date() });
    res.redirect("/");
}