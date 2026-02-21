const http = require('http'); //built in

const server = http.createServer((req, res) => {
    //req: Incoming request(method, url, headers
    //res: Outgoing reponse(write, end)

    if(req.method === 'GET' && req.url === '/' ) {
        //maual route check
        res.writeHead(200, {'Content-Type': 'text/plain'}); //maual heders
        res.end('Hello from Raw Node.js!');//Send body & close
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found :('); //Basic error msg
    } 
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Raw server running on http://localhost:${PORT}');
});