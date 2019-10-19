import { Response, Request } from "express";

class MessageController {
  index = async (req: Request, res: Response) => {
    const messages = [
      {user: "user1", message: "hello"},
      {user: "user2", message: "hi there"}
    ];
    res.json(messages).status(200);
  };
}

export default new MessageController();
