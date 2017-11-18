# Coffee Shop Dummy API

Welcome to the Coffe Shop Dummy API - a simple "e-commerce" API to get you up and running.

**Features:**
- Dummy users to simulate login
- Categories with subproducts 
- Images for all categories and products

### Requirements

- NPM & Node installed
- Tested on Node v7.9.0
- Tested on NPM 4.2.0

### Installation

1. Clone the repo `git clone {url}`
2. `cd` into the directory and run `npm install`
3. To start the server, run `node server.js`

Hopefully you get the message **json-server is running! PORT: 3000**

The server runs on `localhost:300`

### Routes

To view all available routes - `localhost:3000/routes`

```
[
  {
    "routes": {
      "users": {
        "all": "/users",
        "single": "/users/:id"
      },
      "categories": {
        "all": "/categories",
        "single": "/categories/:id"
      },
      "products": {
        "all": "/categories/:categories_id/products",
        "single": "/categories/:categories_id/products/:id"
      }
    }
  }
]
```

### Editing

All data lives in the `db.json` and is a simple JSON file with the data. If you want to change anything, just edit that file and restart the server

All images live within the `public` folder

### Problems

Have any problems? Check out the [json-server npm package](https://github.com/typicode/json-server)!