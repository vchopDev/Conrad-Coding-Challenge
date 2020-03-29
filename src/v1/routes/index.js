const { Router } = require("express");
const RepoController = require("../controllers/repositories/repositoryController");
const ZenController = require("../controllers/zen/zenController");
const BookmarkController = require("../controllers/bookmarks/bookmarkController");
const SecurityStragety = require("../../passport/securityStrategy");
var router = Router();
/**
 * @api {get} /v1/ Request Github Zen
 * @apiName GetZen
 * @apiGroup Zen
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "result" : "Mind your words, they are important."
 *  }
 *
 */
router.get("/", ZenController.GetZen);
/**
 * @api {get} /v1/repositories/?seach="example" Request Github Zen
 * @apiName GetRepepositories
 * @apiGroup Github Repositories
 * @apiParam { String } search term to be searched
 * @apiDescription This endpoint searches a term trhough the github api
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "count" : 30,
 *    "result" : [
  *     {
          "id": 38265709,
          "name": "css",
          "fullname": "airbnb/css",
          "description": "A mostly reasonable approach to CSS and Sass.",
          "url": "https://github.com/airbnb/css"
        },
        {
          "id": 32551735,
          "name": "css",
          "fullname": "primer/css",
          "description": "The CSS design system that powers GitHub",
          "url": "https://github.com/primer/css"
          },
          ....
*     ]
 *  }
 * 
 */
router.get("/repositories", RepoController.GetRepositories);
/**
 * @api {get} /v1/bookmarks/  Get Bookmarks
 * @apiName Bookmarks
 * @apiGroup Get Bookmarks
 * @apiDescription This endpoint returns all bookmarks on db
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
      "result": [
        {
          "id": "000000000",
          "name": "vchoptesufdfsdfdsfut",
          "url": "https://test.com"
        }
      ]
    }
 * 
 */
router.get("/bookmarks", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.GetAllBookmarks);
router.post("/bookmarks/add", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.CreateBookmark);
router.put("/bookmarks/update", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.UpdateBookmark);
router.delete("/bookmarks/remove/:id", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.RemoveBookmark);
module.exports = router;
