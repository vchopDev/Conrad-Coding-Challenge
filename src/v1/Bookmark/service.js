const repository = require("./repository");
const Bookmark = require("./model");
const CreateBookmark = async bookmark => {
  try {
    const model = GetBookmark(bookmark);
    const result = await repository.CreateBookmark(model);
    return result;
  } catch (error) {
    throw error;
  }
};

const UpdateBookmark = async bookmark => {
  try {
    const model = GetBookmark(bookmark);
    const result = await repository.UpdateBookmark(model);
    return result;
  } catch (error) {
    throw error;
  }
};

const RemoveBookmark = async id => {
  try {
    const result = await repository.RemoveBookmark(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const GetAllBookmarks = async () => {
  try {
    const result = await repository.GetAllBookmarks();
    return result;
  } catch (error) {
    throw error;
  }
};

const GetBookmark = bookmark => {
  if(!bookmark.id || bookmark.id === "undefined") throw new Error("BookmarkMissingId");
  if (typeof bookmark.id !== "string" || bookmark.id === "") throw new Error("BookmarkNotValidId");
  if (!bookmark.name) throw new Error("BookmarkMissingName");
  if (!bookmark.url) throw new Error("BookmarkMissingUrl");

  return new Bookmark(bookmark.id, bookmark.name, bookmark.url);
};

module.exports = {
  GetAllBookmarks,
  CreateBookmark,
  UpdateBookmark,
  RemoveBookmark
};
