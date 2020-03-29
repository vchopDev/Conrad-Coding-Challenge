const axios = require("axios");

const GetZen = async (req, res) => {
  try {
    const result = await axios.get("https://api.github.com/zen");
    if (!result || result.status !== 200)  
      return res.status(500).send({ message: "...ops!! Something got wrong, please retry a few minutes later" });
    
    return res.status(200).send({result: result.data})
  } catch (err) {
    //TODO:Log
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  GetZen
};
