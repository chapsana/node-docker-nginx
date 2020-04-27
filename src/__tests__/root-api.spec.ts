import app from "../app";
import { Response } from "supertest";
import request from "supertest";

describe("GET / - a root api endpoint", () => {
  it("app index request", async () => {
    const res : Response = await request(app).get("/");
    
    // expect(result.text).toEqual("hello");
    expect(res.status).toEqual(200);
  });
});

