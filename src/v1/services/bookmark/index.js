const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ bookmarks: [] }).write();

const CreateBookmark = async bookmark => {
  db.get("bookmarks")
    .push(bookmark)
    .last()
    .assign({ id: bookmark.id })
    .write()
    .then(bookmark => {
      return bookmark;
    });
};

module.exports = {
  CreateBookmark
}
