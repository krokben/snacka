import * as express from "express";
import MessageController from "./controllers/message_controller";

const router = express.Router();

router.get("/messages", MessageController.index);

export { router };
