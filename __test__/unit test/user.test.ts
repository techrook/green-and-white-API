import supertest from "supertest";
import mongoose from "mongoose";
import app from "../../src/app";
import { MongoMemoryServer } from "mongodb-memory-server";

const userInput = {
  username: "lebron",
  password: "Password123",
};

describe("user", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe("user", () => {
    describe("registration or signup", () => {
      it("should return status code, message and data  ", async () => {
        const { statusCode, body } = await supertest(app)
          .post("/api/user/signup")
          .send(userInput);

        expect(statusCode).toBe(201);
        expect(body.message).toBe("User signed up");
        expect(body.data.username).toBe("lebron");
        expect(body.data).toHaveProperty(["API_KEY"]);
      });
    });
    describe("login", () => {
      it("should login users", async () => {
        const { statusCode, body } = await supertest(app)
          .post("/api/user/login")
          .send(userInput);

        expect(statusCode).toBe(202);
      });
    });
  });
});
