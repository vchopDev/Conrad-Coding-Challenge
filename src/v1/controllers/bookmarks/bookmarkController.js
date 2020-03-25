const bookmarkService = require("../../services/bookmark");

const CreateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    let result = await bookmarkService.CreateBookmark(bookmark);
    return res.status(200).json({ result : result})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const GetAllBookmarks = async (req, res) => {
  try {
    let result = await bookmarkService.GetAllBookMarks();
    return res.status(200).json({ result : result})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {
  CreateBookmark,
  GetAllBookmarks
}