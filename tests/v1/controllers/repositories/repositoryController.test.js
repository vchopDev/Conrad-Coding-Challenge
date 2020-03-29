const app = require("../../../../src/server/index");
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
// describe("GET /v1/repositories/?search=", () => {
//   it("", () => {
//     sinon.spy(app.repositoryController, "GetRepositories")
//     let req = {
//       query: {
//         search: "typescript"
//       }
//     }
//     let res = {
//       status: sinon.spy(),
//       json: sinon.spy()
//     }
//     repositoryController.GetRepositories(req, res);
//     console.log("res", res)
//     expect(res.json.calledOnce).to.be.true;
//     expect(res.status.calledOnce).to.be.true;
//     expect(res.json.firstCall.args[0]).to.equal("result");
//   });
// });
