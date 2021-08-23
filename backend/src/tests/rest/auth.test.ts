import request from "supertest";
import app from "../../server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

describe("Register a user", () => {
  test("It should register a user correctly", done => {
    request(app)
      .post("/api/v1/register")
      .send({
        firstname: "Roberto",
        email: "rob@mail.it",
        password: "ciaociao",
        confirmPassword: "ciaociao",
      })
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

describe("Login a user", () => {
  test("It should successfully login a user", done => {
    request(app)
      .post("/api/v1/login")
      .send({ email: "rob@mail.it", password: "ciaociao" })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.body.accessToken).toBeDefined();
        expect(res.body.success).toEqual(true);
        done();
      });
  });
});

afterAll(async () => {
  await prisma.users.delete({
    where: {
      email: "rob@mail.it",
    },
  });

  prisma.$disconnect();
});
