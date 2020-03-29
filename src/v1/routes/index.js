const { Router } = require("express");
const RepoController = require("../controllers/repositories/repositoryController");
const ZenController = require("../controllers/zen/zenController");
const BookmarkController = require("../controllers/bookmarks/bookmarkController");
const SecurityStragety = require("../../passport/securityStrategy");
var router = Router();

router.get("/", ZenController.GetZen);
router.get("/repositories", RepoController.GetRepositories);
router.get("/bookmarks", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.GetAllBookmarks);
router.post("/bookmarks/add", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.CreateBookmark);
router.put("/bookmarks/update", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.UpdateBookmark);
router.delete("/bookmarks/remove/:id", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.RemoveBookmark);
module.exports = router;
