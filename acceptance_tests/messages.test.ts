import * as request from "supertest";
import { app } from "../server";

describe("GET /messages", () => {
  it("SHOULD return 200 OK", done => {
    request(app)
      .get("/messages")
      .end((err, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it("SHOULD return list of 2 messages WHEN db contains 2 messages", async done => {
    const messages = [
      {user: "user1", message: "hello"},
      {user: "user2", message: "hi there"}
    ];

    request(app)
      .get("/messages")
      .end((err, res) => {
        expect(res.body).toEqual(messages);
        done();
      })
  });
});
