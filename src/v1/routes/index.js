const { Router } = require("express");
const RepoController = require("../controllers/repositories/repositoryController");
const ZenController = require("../controllers/zen/zenController");
const BookmarkController = require("../controllers/bookmarks/bookmarkController");
var router = Router();

router.get("/", ZenController.GetZen);
router.get("/repositories", RepoController.GetRepositories);
router.get("/bookmarks", BookmarkController.GetAllBookmarks);
router.post("/bookmarks/add", BookmarkController.CreateBookmark);
router.put("/bookmarks/update", BookmarkController.UpdateBookmark);
router.delete("/bookmarks/remove/:id", BookmarkController.RemoveBookmark)
module.exports = router;
