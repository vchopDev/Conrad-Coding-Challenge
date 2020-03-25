var app = require("../../../../src/server/index");
var request = require("supertest");

test("GET /v1/bookmarks", done => {
  request(app)
    .get("/v1/bookmarks")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(done);
});
