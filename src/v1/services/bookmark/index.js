const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const Bookmark = require("../../models/bookmark/bookmark");
db.defaults({ bookmarks: [] }).write();

const CreateBookmark = async bookmark => {
  const model = GetBookmark(bookmark);
  const result = db.get("bookmarks")
    .push(model)
    .last()
    .assign({ id: model.id })
    .write();

  return result;
};

const GetAllBookMarks = async () => {
  return db.get("bookmarks");
}


const GetBookmark = bookmark => {
  if(!bookmark.id)
    throw new Error("Bookmarks id is missing");
  if(!bookmark.name)
    throw new Error("Bookmarks name is missing");
  if(!bookmark.url)
    throw new Error("Bookmarks url is missing");
    
  return new Bookmark(bookmark.id, bookmark.name, bookmark.url)
}

module.exports = {
  CreateBookmark,
  GetAllBookMarks
}
