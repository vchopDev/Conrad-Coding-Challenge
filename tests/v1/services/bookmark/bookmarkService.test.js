const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const bookmarkService = require("../../../../src/v1/services/bookmark/index");

describe("Service", () => {
  afterEach(() => {
    sinon.restore();
  });

  test("",() => {
    const spy = sinon.spy(bookmarkService, "CreateBookmark");
    
  })
});
