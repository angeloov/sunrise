import request from "supertest";
import app from "../../server";

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/api/v1/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
