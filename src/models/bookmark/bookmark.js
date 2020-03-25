const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String }
});

module.exports = mongoose.model("bookmark", BookmarkSchema);
