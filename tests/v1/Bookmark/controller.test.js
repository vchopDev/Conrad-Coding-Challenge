var app = require("../../../src/server/index");
var request = require("supertest");
const chai = require("chai");
const { expect } = chai;
const bodyParser = require("body-parser");
const util = require("util");

app.use(bodyParser.json());

const username = "test";
const password = "12345678";

const GetBookmarks = async (username, password) => {
  return await request(app)
    .get("/v1/bookmarks")
    .auth(username, password)
    .set("Accept", "application/json");
};

const CreateBookmark = async (username, password, data) => {
  return await request(app)
    .post("/v1/bookmarks/")
    .auth(username, password)
    .send(data)
    .set("Accept", "application/json");
};

const UpdateBookmark = async (username, password, data) => {
  return await request(app)
    .put(`/v1/bookmarks/${data.bookmark.id}`)
    .auth(username, password)
    .send(data)
    .set("Accept", "application/json");
};

const RemoveBookmark = async (username, password, id) => {
  return await request(app)
    .delete(`/v1/bookmarks/${id}`)
    .auth(username, password)
    .set("Accept", "application/json");
};

describe("- CRUD TESTING RESPONSE STATUS - bookmark endpoints", () => {
  describe("- BookmarkController", () => {
    test("GET /v1/bookmarks should return 200", async done => {
      const result = await GetBookmarks(username, password);
      expect(result.status).to.be.equal(200);

      const { body } = result;
      expect(body.length).to.be.equal(0);
      done();
    });

    test("POST /v1/bookmarks/add should sould return 200  ", async done => {
      const data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const result = await CreateBookmark(username, password, data);
      expect(result.status).to.be.equal(200);

      const { body } = result;
      expect(body.id).to.be.equal(data.bookmark.id);
      expect(body.name).to.be.equal(data.bookmark.name);
      expect(body.url).to.be.equal(data.bookmark.url);
      done();
    });

    test("PUT /v1/bookmarks/update should return status 200", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createdPayload = await CreateBookmark(username, password, data);
      expect(createdPayload.status).to.be.equal(200);
      data = { bookmark: { id: "0000", name: "test-updated", url: "test" } };

      const result = await UpdateBookmark(username, password, data);
      expect(result.status).to.be.equal(200);
      done();
    });

    test("DELETE /v1/bookmarks/remove/:id should return status 200", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await CreateBookmark(username, password, data);
      expect(createPayload.status).to.be.equal(200);

      const bookmarks = await GetBookmarks(username, password);

      expect(bookmarks.status).to.be.equal(200);
      expect(bookmarks.body.length).to.be.equal(1);

      const removeResult = await RemoveBookmark(username, password, data.bookmark.id);
      expect(removeResult.status).to.be.equal(200);

      const { body } = removeResult;
      expect(body.length).to.be.equal(0);
      done();
    });

    test("POST /v1/bookmarks/add should sould return 400 when bad payload is recieved, missing bookmark id  ", async done => {
      const data = { bookmark: { name: "test", url: "test" } };

      const result = await CreateBookmark(username, password, data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark id is missing.");
      done();
    });

    test("POST /v1/bookmarks/add should sould return 400 when bad payload is recieved, missing bookmark name  ", async done => {
      const data = { bookmark: { id: "0000", url: "test" } };

      const result = await CreateBookmark(username, password, data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark name is missing.");
      done();
    });

    test("POST /v1/bookmarks/add should sould return 400 when bad payload is recieved, missing bookmark url  ", async done => {
      const data = { bookmark: { id: "0000", name: "test" } };

      const result = await CreateBookmark(username, password, data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark url is missing.");
      done();
    });

    test("PUT /v1/bookmarks/update should sould return 400 when bad payload is recieved, missing bookmark id  ", async done => {
      const data = { bookmark: { name: "test", url: "test" } };
      const result = await UpdateBookmark(username, password, data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark id is missing.");
      done();
    });

    test("PUT /v1/bookmarks/update should sould return 400 when bad payload is recieved, missing bookmark name  ", async done => {
      const data = { bookmark: { id: "0000", url: "test" } };

      const result = await UpdateBookmark(username, password, data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark name is missing.");
      done();
    });

    test("PUT /v1/bookmarks/update should sould return 400 when bad payload is recieved, missing bookmark url  ", async done => {
      const data = { bookmark: { id: "0000", name: "test" } };

      const result = await UpdateBookmark(username, password, data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark url is missing.");
      done();
    });

    test("DELETE /v1/bookmarks/remove/:id should returns status 400 when data item is not present on db", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await CreateBookmark(username, password, data);
      expect(createPayload.status).to.be.equal(200);

      const bookmarks = await GetBookmarks(username, password);
      expect(bookmarks.status).to.be.equal(200);
      expect(bookmarks.body.length).to.be.equal(1);

      const removeResult = await RemoveBookmark(username, password, -1);
      expect(removeResult.status).to.be.equal(400);

      const { error } = removeResult;
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("The id recevied has no bookmark associated with.");
      done();
    });

    test("POST /v1/bookmarks/add should returns status 401 when user is unauthorized", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await request(app)
        .post("/v1/bookmarks")
        .send(data)
        .set("Accept", "application/json");
      expect(createPayload.status).to.be.equal(401);
      done();
    });

    test("PUT /v1/bookmarks/update should returns status 401 when user is unauthorized", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await CreateBookmark(username, password, data);
      expect(createPayload.status).to.be.equal(200);

      const updatepayload = await request(app)
        .put(`/v1/bookmarks/${data.bookmark.id}`)
        .send(data)
        .set("Accept", "application/json");
      expect(updatepayload.status).to.be.equal(401);
      done();
    });

    test("DELETE /v1/bookmarks/remove should returns status 401 when user is unauthorized", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await CreateBookmark(username, password, data);
      expect(createPayload.status).to.be.equal(200);

      const deletePayload = await request(app)
        .delete(`/v1/bookmarks/${data.bookmark.id}`)
        .set("Accept", "application/json");
      expect(deletePayload.status).to.be.equal(401);
      done();
    });

    test("GET /v1/bookmarks/ should returns status 401 when user is unauthorized", async done => {
      const bookmarks = await request(app)
        .get("/v1/bookmarks/")
        .set("Accept", "application/json");
      expect(bookmarks.status).to.be.equal(401);
      done();
    });
  });
});
