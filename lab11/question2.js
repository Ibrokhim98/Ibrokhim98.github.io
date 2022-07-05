
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./images/image.jpeg', function (err, content) {
        if (err) {
            res.writeHead(400, { 'Content-type': 'text/html' })
            console.log(err);
            res.end("No such image");
        } else {
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(content);
        }
    });
});

server.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});

