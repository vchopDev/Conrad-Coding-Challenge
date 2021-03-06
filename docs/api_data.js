define({ "api": [
  {
    "type": "get",
    "url": "/v1/bookmarks/",
    "title": "Get bookmarks",
    "name": "Bookmarks",
    "group": "Bookmarks",
    "description": "<p>This endpoint returns all bookmarks on db. This endpoint requires authentication trough basic authentication.</p>",
    "parameter": {
      "fields": {
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"[\n       {\n         \"id\": \"000000000\",\n         \"name\": \"vchoptesufdfsdfdsfut\",\n         \"url\": \"https://test.com\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/v1/routes/index.js",
    "groupTitle": "Bookmarks"
  },
  {
    "type": "delete",
    "url": "/v1/bookmarks/:id",
    "title": "Delete bookmark",
    "group": "Bookmarks",
    "description": "<p>This endpoint deletes an existing bookmark and returns the current db. This endpoint requires authentication trough basic authentication.</p>",
    "parameter": {
      "fields": {
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ],
        "Id": [
          {
            "group": "Id",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Bookmarks id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"[\n       {\n         \"id\": \"000000000\",\n         \"name\": \"vchoptesufdfsdfdsfut\",\n         \"url\": \"https://test.com\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark id is missing.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"The id recevied has no bookmark associated with.\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/v1/routes/index.js",
    "groupTitle": "Bookmarks",
    "name": "DeleteV1BookmarksId"
  },
  {
    "type": "post",
    "url": "/v1/bookmarks/",
    "title": "Post bookmark",
    "group": "Bookmarks",
    "description": "<p>This endpoint creates a new bookmark and returns it. This endpoint requires authentication trough basic authentication.</p>",
    "parameter": {
      "fields": {
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "json",
            "optional": false,
            "field": "bookmark",
            "description": "<p>body parameter must be a json as follow sending a payload with one of it's properties empty must result in a error response: { &quot;bookmark&quot; : { &quot;id&quot;: 12, &quot;name&quot;: &quot;vushudhfudhupddasdasate&quot;, &quot;fullname&quot;: &quot;test/testsdsadsadupdate&quot;, &quot;description&quot;: &quot;Super test repository updated&quot;, &quot;url&quot;: &quot;https://test.com&quot; } }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"[\n       {\n         \"id\": \"000000000\",\n         \"name\": \"vchoptesufdfsdfdsfut\",\n         \"url\": \"https://test.com\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark id is missing.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark name is missing.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark url is missing.\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/v1/routes/index.js",
    "groupTitle": "Bookmarks",
    "name": "PostV1Bookmarks"
  },
  {
    "type": "put",
    "url": "/v1/bookmarks/:id",
    "title": "Put bookmark",
    "group": "Bookmarks",
    "description": "<p>This endpoint updates an existing bookmark and returns it. This endpoint requires authentication trough basic authentication.</p>",
    "parameter": {
      "fields": {
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ],
        "Id": [
          {
            "group": "Id",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Bookmarks id</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "json",
            "optional": false,
            "field": "bookmark",
            "description": "<p>body parameter must be a json as follow sending a payload with one of it's properties empty must result in a error response: { &quot;bookmark&quot; : { &quot;name&quot;: &quot;vushudhfudhupddasdasate&quot;, &quot;fullname&quot;: &quot;test/testsdsadsadupdate&quot;, &quot;description&quot;: &quot;Super test repository updated&quot;, &quot;url&quot;: &quot;https://test.com&quot; } }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"[\n       {\n         \"id\": \"000000000\",\n         \"name\": \"vchoptesufdfsdfdsfut\",\n         \"url\": \"https://test.com\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark id is missing.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark name is missing.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark url is missing.\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"error\": \"Bookmark id is in a valid format.\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/v1/routes/index.js",
    "groupTitle": "Bookmarks",
    "name": "PutV1BookmarksId"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/docs/main.js",
    "group": "C:\\Progetti\\Tests\\Personal\\Conrad\\Conrad-Coding-Challenge\\src\\docs\\main.js",
    "groupTitle": "C:\\Progetti\\Tests\\Personal\\Conrad\\Conrad-Coding-Challenge\\src\\docs\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/v1/repositories/?seach=\"example\"",
    "title": "Repositories",
    "name": "GetRepepositories",
    "group": "Github_Repositories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>term to be searched</p>"
          }
        ]
      }
    },
    "description": "<p>This endpoint searches a term trhough the github api</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\" : 30,\n  \"result\" : [\n   {\n         \"id\": 38265709,\n         \"name\": \"css\",\n         \"fullname\": \"airbnb/css\",\n         \"description\": \"A mostly reasonable approach to CSS and Sass.\",\n         \"url\": \"https://github.com/airbnb/css\"\n       },\n       {\n         \"id\": 32551735,\n         \"name\": \"css\",\n         \"fullname\": \"primer/css\",\n         \"description\": \"The CSS design system that powers GitHub\",\n         \"url\": \"https://github.com/primer/css\"\n         },\n         ....\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/v1/routes/index.js",
    "groupTitle": "Github_Repositories"
  },
  {
    "type": "get",
    "url": "/v1/",
    "title": "Github Zen",
    "name": "GetZen",
    "group": "Zen",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\" : \"Mind your words, they are important.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/v1/routes/index.js",
    "groupTitle": "Zen"
  }
] });
