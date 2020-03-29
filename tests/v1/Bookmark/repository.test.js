// src/user/user.repository.test.js
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const BookmarkRepository = require("../../../src/v1/Bookmark/repository");

const ClearDB = () => {
  BookmarkRepository.db.length = 0;
};

describe("- BookmarkRepository", () => {
  beforeEach(() => {
    return ClearDB();
  });
  
  test("- CreateBookmark should create a new bookmark and return it", async () => {
    const validStubBookmark = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      url: faker.internet.url()
    };

    const result = await BookmarkRepository.CreateBookmark(validStubBookmark);
    expect(result.id).to.be.equal(validStubBookmark.id);
    expect(result.name).to.be.equal(validStubBookmark.name);
    expect(result.url).to.be.equal(validStubBookmark.url);
  });

  test("- UpdateBookmark should update an existing bookmark and return it", async () => {
    const validStubBookmark = {
      id: "000000",
      name: faker.name.findName(),
      url: faker.internet.url()
    };

    const result = await BookmarkRepository.CreateBookmark(validStubBookmark);
    expect(result.id).to.be.equal(validStubBookmark.id);
    expect(result.name).to.be.equal(validStubBookmark.name);
    expect(result.url).to.be.equal(validStubBookmark.url);

    let dataToUpdate = { id: "000000", name: "test-updated", url: "test" };
    const updatedResult = await BookmarkRepository.UpdateBookmark(dataToUpdate);
    expect(updatedResult.id).to.be.equal(validStubBookmark.id);
    expect(updatedResult.name).to.be.equal(dataToUpdate.name);
    expect(updatedResult.url).to.be.equal(dataToUpdate.url);
  });

  test("- Delete should delete an existing bookmark", async () => {
    const validStubBookmark = {
      id: "000000",
      name: faker.name.findName(),
      url: faker.internet.url()
    };

    const result = await BookmarkRepository.CreateBookmark(validStubBookmark);
    expect(result.id).to.be.equal(validStubBookmark.id);
    expect(result.name).to.be.equal(validStubBookmark.name);
    expect(result.url).to.be.equal(validStubBookmark.url);

    const deleteResult = await BookmarkRepository.RemoveBookmark(validStubBookmark.id);
    expect(deleteResult.length).to.be.equal(0);
  });
});
