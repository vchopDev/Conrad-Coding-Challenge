const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const Memory = require('lowdb/adapters/Memory')
const db = low(new Memory());
const Bookmark = require("../../models/bookmark/bookmark");
db.defaults({ bookmarks: [] }).write();

const CreateBookmark = async bookmark => {
  const model = GetBookmark(bookmark);
  const result = db
    .get("bookmarks")
    .push(model)
    .last()
    .write();

  return result;
};

const UpdateBookmark = async bookmark => {
  const model = GetBookmark(bookmark);
  const result = db
    .get("bookmarks")
    .find({ id: model.id })
    .assign(model)
    .write();
  return result;
};

//TODO: Lowdb remove functions seemms not to work so i need to find another db
const RemoveBookmark = async param => {
  const result = db
    .get("bookmarks")
    .remove({id: param})
    .write();
  return result;
};

const GetAllBookmarks = async () => {
  return db.get("bookmarks").value();
};

const GetBookmark = bookmark => {
  if (!bookmark.id) throw new Error("Bookmarks id is missing");
  if (!bookmark.name) throw new Error("Bookmarks name is missing");
  if (!bookmark.url) throw new Error("Bookmarks url is missing");

  return new Bookmark(bookmark.id, bookmark.name, bookmark.url);
};

module.exports = {
  GetAllBookMarks: GetAllBookmarks,
  CreateBookmark,
  UpdateBookmark,
  RemoveBookmark
};
