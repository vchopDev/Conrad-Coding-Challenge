const bookmarkService = require("../../services/bookmark");

const GetAllBookmarks = async (req, res) => {
  try {
    let result = await bookmarkService.GetAllBookmarks();
    res.status(200).send({ result: result });
  } catch (error) {
    switch (error.message) {
      case "BookmarkNotValidId":
        return res.status(400).send({ error: "Bookmark id has a bad format." });
      default:
        res.status(500).send({ error: error.message });
        break;
    }
  }
};

const CreateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    let result = await bookmarkService.CreateBookmark(bookmark);
    res.status(200).send({ result: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const UpdateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    let result = await bookmarkService.UpdateBookmark(bookmark);
    res.status(200).send({ result: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const RemoveBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await bookmarkService.RemoveBookmark(id);
     res.status(200).send({ result: result });
  } catch (error) {
    switch (error.message) {
      case "MissingBookmark":
        return res.status(400).send({ error: "The id recevied has no bookmark associated with." });
        break;
      default:
        res.status(500).send({ error: error.message });
        break;
    }
  }
};

module.exports = {
  GetAllBookmarks,
  CreateBookmark,
  UpdateBookmark,
  RemoveBookmark
};
