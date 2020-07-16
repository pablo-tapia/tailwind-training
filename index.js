const liveServer = require('live-server');
const params = {
    port: 8080,
    root: "./public",
    ignore: "css",
    open: false,
    file: "index.html",
    wait: 1000,
    mount: [
        ["/components", "./node_modules"]
    ],
    logLevel: 2,
    middleware: [function(req, res, next) { next(); }]
}

liveServer.start(params);
