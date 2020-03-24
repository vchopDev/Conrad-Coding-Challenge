const axios = require("axios");
var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://api.github.com/zen");
    if (!result || result.status !== 200) res.send({ message: "...ops!! Something got wrong, please retry a few minutes later" });

    res.send(result.data);
  } catch (err) {
    //TODO:Log
  }
});

module.exports = router;
