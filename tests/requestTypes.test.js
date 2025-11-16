import mongoose from "mongoose";
import app from "../src/server.js";
import request from "supertest";

const MONGO_URI = process.env.MONGO_URI_TEST;

beforeAll(async () => {
  await mongoose.connect(MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
