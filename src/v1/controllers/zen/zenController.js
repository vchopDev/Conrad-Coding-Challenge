const axios = require("axios");

const GetZen = async (req, res) => {
  try {
    const result = await axios.get("https://api.github.com/zen");
    if (!result || result.status !== 200) res.status(500).json({ message: "...ops!! Something got wrong, please retry a few minutes later" });
    
    res.status(200).json({data: result.data})
  } catch (err) {
    //TODO:Log
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetZen
};
