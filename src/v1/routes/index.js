const { Router } = require("express");
const RepoController = require("../GithubRepositories/controller");
const ZenController = require("../zen/controller");
const BookmarkController = require("../Bookmark/controller");
const SecurityStragety = require("../../passport/securityStrategy");
var router = Router();

/**
 * @api {get} /v1/  Github Zen
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
 * @api {get} /v1/repositories/?seach="example" Repositories
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
 * @api {get} /v1/bookmarks/ Get bookmarks
 * @apiName Bookmarks
 * @apiGroup Bookmarks
 * @apiDescription This endpoint returns all bookmarks on db. This endpoint requires authentication trough basic authentication.
 * @apiParam (Login) {String} username Users username
 * @apiParam (Login) {String} password Users password
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
      "[
        {
          "id": "000000000",
          "name": "vchoptesufdfsdfdsfut",
          "url": "https://test.com"
        }
      ]
    }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
*/
/**  
 * @api {post} /v1/bookmarks/ Post bookmark
 * @apiGroup Bookmarks
 * @apiDescription This endpoint creates a new bookmark and returns it. This endpoint requires authentication trough basic authentication.
 * @apiParam (Login) {String} username Users username
 * @apiParam (Login) {String} password Users password
 * @apiParam (Body) {json} bookmark body parameter must be a json as follow sending a payload with one of it's properties empty must result in a error response:
 *  {
	    "bookmark" : {
	      "id": 12,
	      "name": "vushudhfudhupddasdasate",
	      "fullname": "test/testsdsadsadupdate",
	      "description": "Super test repository updated",
	      "url": "https://test.com"
      }
    }
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
      "[
        {
          "id": "000000000",
          "name": "vchoptesufdfsdfdsfut",
          "url": "https://test.com"
        }
      ]
    }
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 * @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark id is missing."
    }
     @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark name is missing."
    }
     @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark url is missing."
    }
*/
/**  
 * @api {put} /v1/bookmarks/:id Put bookmark
 * @apiGroup Bookmarks
 * @apiDescription This endpoint updates an existing bookmark and returns it. This endpoint requires authentication trough basic authentication.
 * @apiParam (Login) {String} username Users username
 * @apiParam (Login) {String} password Users password
 * @apiParam (Id) {String} id Bookmarks id
 * @apiParam (Body) {json} bookmark body parameter must be a json as follow sending a payload with one of it's properties empty must result in a error response:
 *  {
	    "bookmark" : {
	      "name": "vushudhfudhupddasdasate",
	      "fullname": "test/testsdsadsadupdate",
	      "description": "Super test repository updated",
	      "url": "https://test.com"
      }
    }
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
      "[
        {
          "id": "000000000",
          "name": "vchoptesufdfsdfdsfut",
          "url": "https://test.com"
        }
      ]
    }
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 * @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark id is missing."
    }
     @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark name is missing."
    }
     @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark url is missing."
    }
     @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark id is in a valid format."
    }
*/
/**  
 * @api {delete} /v1/bookmarks/:id Delete bookmark
 * @apiGroup Bookmarks
 * @apiDescription This endpoint deletes an existing bookmark and returns the current db. This endpoint requires authentication trough basic authentication.
 * @apiParam (Login) {String} username Users username
 * @apiParam (Login) {String} password Users password
 * @apiParam (Id) {String} id Bookmarks id
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
      "[
        {
          "id": "000000000",
          "name": "vchoptesufdfsdfdsfut",
          "url": "https://test.com"
        }
      ]
    }
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 401 Unauthorized
 * @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "Bookmark id is missing."
    }
     @apiErrorExample Error-Response:
*   HTTP/1.1 404 Bad Request
*   {
      "error": "The id recevied has no bookmark associated with."
    }
*/
router.get("/bookmarks", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.GetAllBookmarks);
router.post("/bookmarks", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.CreateBookmark);
router.put("/bookmarks/:id", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.UpdateBookmark);
router.delete("/bookmarks/:id", SecurityStragety.authenticate("basic", { session: false }), BookmarkController.RemoveBookmark);
module.exports = router;
