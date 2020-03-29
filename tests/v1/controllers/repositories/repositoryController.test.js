const app = require("../../../../src/server/index");
const request = require("supertest");

describe("- RepositoryCotroller", () => {
  describe("- GET /v1/bookmarks", () => {
    test("should return status 200, with json body", () => {
      request(app)
        .get("/v1/repositories/?search='typescript'")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
    });
  })
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
