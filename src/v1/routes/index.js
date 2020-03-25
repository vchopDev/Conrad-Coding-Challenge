const { Router } = require("express");
const RepoController = require("../controllers/repositories/repositoryController");
const ZenController = require("../controllers/zen/zenController");
const BookmarkController = require("../controllers/bookmarks/bookmarkController");
var router = Router();

router.get("/", ZenController.GetZen);
router.get("/repositories", RepoController.GetRepositories);
router.post("/bookmarks/add", BookmarkController.CreateBookmark);
router.get("/bookmarks", BookmarkController.GetAllBookmarks);
module.exports = router;
