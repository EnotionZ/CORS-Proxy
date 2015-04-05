var PORT = 10110;
var cors_proxy = require("./lib/corsproxy");
var http_proxy = require("http-proxy");
http_proxy.createServer(cors_proxy).listen(PORT);
