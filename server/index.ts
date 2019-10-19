import * as express from "express";
import * as morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.get("/messages", (req, res) => {
  const messages = [
    {user: "user1", message: "hello"},
    {user: "user2", message: "hi there"}
  ];
  res.json(messages).status(200);
})

app.listen(3000, () => console.log("[SERVER] is up and running on 3000 ..."));

export { app };
