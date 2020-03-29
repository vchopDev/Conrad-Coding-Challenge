var app = require("../../../../src/server/index");
var request = require("supertest");
const chai = require("chai");
const { expect } = chai;
const bodyParser = require("body-parser");
const util = require("util");

app.use(bodyParser.json());

const GetBookmarks = async () => {
  return await await request(app)
    .get("/v1/bookmarks")
    .set("Accept", "application/json");
};

const CreateBookmark = async data => {
  return await request(app)
    .post("/v1/bookmarks/add")
    .send(data)
    .set("Accept", "application/json");
};

const UpdateBookmark = async data => {
  return await request(app)
    .put("/v1/bookmarks/update")
    .send(data)
    .set("Accept", "application/json");
};

const RemoveBookmark = async id => {
  return await request(app)
    .delete(`/v1/bookmarks/remove/${id}`)
    .set("Accept", "application/json");
};

describe("- CRUD TESTING RESPONSE STATUS - bookmark endpoints", () => {
  describe("- BookmarkController", () => {
    test("BookmarkController -> GET /v1/bookmarks should return 200", async done => {
      const result = await GetBookmarks();
      expect(result.status).to.be.equal(200);

      const { body } = result;
      expect(body).to.have.property("result");
      expect(body.result.length).to.be.equal(0);

      done();
    });

    test("BookmarkController -> POST /v1/bookmarks/add should sould return 200  ", async done => {
      const data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const result = await CreateBookmark(data);
      expect(result.status).to.be.equal(200);

      const { body } = result;
      expect(body).to.have.property("result");
      expect(body.result.id).to.be.equal(data.bookmark.id);
      expect(body.result.name).to.be.equal(data.bookmark.name);
      expect(body.result.url).to.be.equal(data.bookmark.url);
      done();
    });

    test("BookmarkController -> PUT /v1/bookmarks/update should return status 200", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      //Could be used to check data
      const createdPayload = await CreateBookmark(data);
      expect(createdPayload.status).to.be.equal(200);
      data = { bookmark: { id: "0000", name: "test-updated", url: "test" } };

      const result = await UpdateBookmark(data);
      expect(result.status).to.be.equal(200);
      done();
    });

    test("BookmarkController -> DELETE /v1/bookmarks/remove/:id should return status 200", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await CreateBookmark(data);
      expect(createPayload.status).to.be.equal(200);

      const bookmarks = await GetBookmarks();
      const { result } = bookmarks.body;

      expect(bookmarks.status).to.be.equal(200);
      expect(result.length).to.be.equal(1);

      const removeResult = await RemoveBookmark(data.bookmark.id);
      expect(removeResult.status).to.be.equal(200);

      const { body } = removeResult;
      expect(body.result.length).to.be.equal(0);
      done();
    });

    test("BookmarkController -> POST /v1/bookmarks/add should sould return 400 when bad payload is recieved, missing bookmark id  ", async done => {
      const data = { bookmark: { name: "test", url: "test" } };

      const result = await CreateBookmark(data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark id is missing.");
      done();
    });

    test("BookmarkController -> POST /v1/bookmarks/add should sould return 400 when bad payload is recieved, missing bookmark name  ", async done => {
      const data = { bookmark: { id: "0000", url: "test" } };

      const result = await CreateBookmark(data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark name is missing.");
      done();
    });

    test("BookmarkController -> POST /v1/bookmarks/add should sould return 400 when bad payload is recieved, missing bookmark url  ", async done => {
      const data = { bookmark: { id: "0000", name: "test" } };

      const result = await CreateBookmark(data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark url is missing.");
      done();
    });


   test("BookmarkController -> PUT /v1/bookmarks/update should sould return 400 when bad payload is recieved, missing bookmark id  ", async done => {
      const data = { bookmark: { name: "test", url: "test" } };

      const result = await UpdateBookmark(data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark id is missing.");
      done();
    });

    test("BookmarkController -> PUT /v1/bookmarks/update should sould return 400 when bad payload is recieved, missing bookmark name  ", async done => {
      const data = { bookmark: { id: "0000", url: "test" } };

      const result = await UpdateBookmark(data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark name is missing.");
      done();
    });

    test("BookmarkController -> PUT /v1/bookmarks/update should sould return 400 when bad payload is recieved, missing bookmark url  ", async done => {
      const data = { bookmark: { id: "0000", name: "test" } };

      const result = await UpdateBookmark(data);
      const { error } = result;
      expect(result.status).to.be.equal(400);
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("Bookmark url is missing.");
      done();
    });

    test("BookmarkController -> DELETE /v1/bookmarks/remove/:id should returns status 400 when data item is not present on db", async done => {
      let data = { bookmark: { id: "0000", name: "test", url: "test" } };

      const createPayload = await CreateBookmark(data);
      expect(createPayload.status).to.be.equal(200);

      const bookmarks = await GetBookmarks();
      const { result } = bookmarks.body;
      expect(bookmarks.status).to.be.equal(200);
      expect(result.length).to.be.equal(1);

      const removeResult = await RemoveBookmark(-1);
      expect(removeResult.status).to.be.equal(400);

      const { error } = removeResult;
      const errorResult = JSON.parse(error.text);
      expect(errorResult.error).to.be.equal("The id recevied has no bookmark associated with.");
      done();
    });
  });
});
