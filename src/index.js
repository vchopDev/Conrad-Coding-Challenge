require("dotenv").config();
const server = require("./server");

const PORT = process.env.PORT || 3000;

// Handle 404 - Keep this as a last route
server.use(function(req, res, next) {
  res.status(404).send({ error: "....Ooooops! I did not found what you are looking for."});
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

module.exports = server;
