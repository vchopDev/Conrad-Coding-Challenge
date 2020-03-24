const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const index = require("./v1/routes/index");

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use('/', require(path.join(__dirname, './v1/routes')));


app.use()

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/v1/", index);

// app.use("/repositories", repositories);
// app.use("/bookmarks", bookmarks);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
