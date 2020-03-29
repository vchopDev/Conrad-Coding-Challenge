let db = [];

const CreateBookmark = async bookmark => {
  return await AddOrUpdateBookmark(bookmark);
};

//TODO: Check For existing items
const UpdateBookmark = async bookmark => {
  return await AddOrUpdateBookmark(bookmark);
};

const RemoveBookmark = async id => {
  const bookmarkIndex = db.findIndex(x => x.id === id);
  if (bookmarkIndex < 0) throw Error("MissingBookmark");

  db.splice(bookmarkIndex, 1);
  return db;
};

const GetAllBookmarks = async () => {
  return db;
};

const AddOrUpdateBookmark = async model => {
  let index = db.findIndex(x => x.id === model.id);

  if (index < 0) db.push(model);
  else db[index] = model;

  return db.find(x => x.id === model.id);
};

//Exporting db here just for testing, I would not do that in production
module.exports = {
  GetAllBookmarks,
  CreateBookmark,
  UpdateBookmark,
  RemoveBookmark,
  db
};
