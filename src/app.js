"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index");
const app = express();
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/", index);

// app.use("/repositories", repositories);
// app.use("/bookmarks", bookmarks);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
