const bookmarkService = require("../../services/bookmark");

const CreateBookmark = async (req, res) => {
  try {
    const { bookmark } = req.body;
    let result = await bookmarkService.CreateBookmark(bookmark);
    return res.status(200).json({ result : result})
  } catch (Error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {
  CreateBookmark
}