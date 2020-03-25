const bookmarkService = require("../../services/bookmark");

const GetAllBookmarks = async (req, res) => {
  try {
    let result = await bookmarkService.GetAllBookMarks();
    return res.status(200).json({ result : result})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const CreateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    let result = await bookmarkService.CreateBookmark(bookmark);
    return res.status(200).json({ result : result})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const UpdateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    let result = await bookmarkService.UpdateBookmark(bookmark);
    return res.status(200).json({ result : result})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const RemoveBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await bookmarkService.RemoveBookmark(id);
    return res.status(200).json({ result : result})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetAllBookmarks,
  CreateBookmark,
  UpdateBookmark,
  RemoveBookmark
}