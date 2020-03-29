const bookmarkService = require("./service");

const GetAllBookmarks = async (req, res) => {
  try {
    let result = await bookmarkService.GetAllBookmarks();
    res.status(200).send(result);
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
    return res.status(200).send(result);
  } catch (error) {
    switch (error.message) {
      case "BookmarkMissingId":
        return res.status(400).json({ error: "Bookmark id is missing." });

      case "BookmarkNotValidId":
        return res.status(400).send({ error: "Bookmark id is in a valid format." });

      case "BookmarkMissingName":
        return res.status(400).send({ error: "Bookmark name is missing." });

      case "BookmarkMissingUrl":
        return res.status(400).send({ error: "Bookmark url is missing." });

      default:
        return res.status(500).send({ error: error.message });
    }
  }
};

const UpdateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    const { id } = req.params;
    bookmark["id"] = id;
    let result = await bookmarkService.UpdateBookmark(bookmark);
    res.status(200).send(result);
  } catch (error) {
    switch (error.message) {
      case "BookmarkMissingId":
        return res.status(400).json({ error: "Bookmark id is missing." });

      case "BookmarkNotValidId":
        return res.status(400).send({ error: "Bookmark id is in a valid format." });

      case "BookmarkMissingName":
        return res.status(400).send({ error: "Bookmark name is missing." });

      case "BookmarkMissingUrl":
        return res.status(400).send({ error: "Bookmark url is missing." });

      default:
        return res.status(500).send({ error: error.message });
    }
  }
};

const RemoveBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await bookmarkService.RemoveBookmark(id);
    res.status(200).send(result);
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
