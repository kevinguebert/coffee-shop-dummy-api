var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var fs = require('fs');
var port = process.env.PORT || 3000;

server.use(middlewares);

server.use(jsonServer.rewriter({
	"/routes": "/welcome",
  "/categories/:category": "/categories/:category",
  "/categories/:category/:resource": "/:resource?category=:category"
}));

server.use(router);
// server.use('/api', router)

server.listen(port, function () {
  console.log('\x1b[36mjson-server is running! PORT: ' + port);
});
