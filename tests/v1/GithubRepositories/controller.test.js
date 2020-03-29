const app = require("../../../src/server/index");
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;

const GetRepositories = async () => {
  return await request(app)
    .get("/v1/repositories/?search='typescript'")
    .set("Accept", "application/json");
};

describe("- GET REPOSITORIES TEST", () => {
  describe("- RepositoriesController", () => {
    test("GET /v1/repositories/?search=", async () => {
      const result = await GetRepositories();
      expect(result.status).to.be.equal(200);
      expect(result.body.count).to.be.equal(30)
    });
  });
});