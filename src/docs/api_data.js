define({ "api": [
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
    "filename": "./docs/main.js",
    "group": "C:\\Progetti\\Tests\\Personal\\Conrad\\Conrad-Coding-Challenge\\src\\docs\\main.js",
    "groupTitle": "C:\\Progetti\\Tests\\Personal\\Conrad\\Conrad-Coding-Challenge\\src\\docs\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/v1/bookmarks/",
    "title": "Get Bookmarks",
    "name": "Bookmarks",
    "group": "Get_Bookmarks",
    "description": "<p>This endpoint returns all bookmarks on db</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"result\": [\n       {\n         \"id\": \"000000000\",\n         \"name\": \"vchoptesufdfsdfdsfut\",\n         \"url\": \"https://test.com\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./v1/routes/index.js",
    "groupTitle": "Get_Bookmarks"
  },
  {
    "type": "get",
    "url": "/v1/repositories/?seach=\"example\"",
    "title": "Request Github Zen",
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
    "filename": "./v1/routes/index.js",
    "groupTitle": "Github_Repositories"
  },
  {
    "type": "get",
    "url": "/v1/",
    "title": "Request Github Zen",
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
    "filename": "./v1/routes/index.js",
    "groupTitle": "Zen"
  }
] });
