const app = require("../../../src/server/index");
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;

const GetRepositories = async () => {
  return await request(app)
    .get("/v1/")
    .set("Accept", "application/json");
};

describe("- GET ZEN TEST", () => {
  describe("- RepositoriesController", () => {
    test("GET /v1/ should return status 200 with zen", async () => {
      const result = await GetRepositories();
      expect(result.status).to.be.equal(200);
    });
  });
});