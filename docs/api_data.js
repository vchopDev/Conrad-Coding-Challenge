define({ "api": [
  {
    "type": "get",
    "url": "/v1/",
    "title": "Request Github Zen",
    "name": "GetZen",
    "group": "Zen",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Zen",
            "description": ""
          }
        ]
      },
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
