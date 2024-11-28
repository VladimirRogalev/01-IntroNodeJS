var http = require('http');
var url = require('url')


const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Hello World! Добро пожаловать!! שלום! </h1>');
    }
    if (req.url == '/time') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // var now = new Date();
        res.end(`<h1><time>${new Date()}</time></h1>`);
    }
    if (req.url.startsWith('/hello?name') ) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let parseUrl = url.parse(req.url,true).query;
        let name = parseUrl.name;
        res.end(`<h1>Hello ${name}</h1>`);
    }


});

server.listen(9191, () => {
    console.log("server is ready : http://localhost:9191/");
})


