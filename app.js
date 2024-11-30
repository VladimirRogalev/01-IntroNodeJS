const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    switch (pathname) {
        case '/': {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('<h1>Hello World! Добро пожаловать!!! שלום! </h1>');
            break;
        }
        case '/time': {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`<h1><time>${new Date().toLocaleString()}</time></h1>`);
            break;
        }
        case '/hello':
            if (!query.name) {
                break;
            }
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`<h1>Hello ${query.name}</h1>`);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(`<h1>404 Not Found</h1>`);


    }
    console.log(pathname);
    // if (req.url === '/') {
    //     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    //     res.end('<h1>Hello World! Добро пожаловать!!! שלום! </h1>');
    //
    // }
    // else if (req.url === '/time') {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     // var now = new Date();
    //     res.end(`<h1><time>${new Date().toLocaleString()}</time></h1>`);
    // }
    // else if (req.url.startsWith('/hello?name') ) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     // let parseUrl = url.parse(req.url,true).query;
    //     // let name = parseUrl.name;
    //     res.end(`<h1>Hello ${query.name}</h1>`);
    // } else {
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     res.end(`<h1>404 Not Found</h1>`);
    // }


});

server.listen(9191, () => {
    console.log("server is ready : http://localhost:9191/");
});


