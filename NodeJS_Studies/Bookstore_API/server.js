const http = require("http");
const port = 3000;

const routes = {
    '/': 'Node Course',
    '/books': 'Enter in the book page',
    '/authors': 'Authors list',
    '/publishingcompany': 'publishing company list',
    '/about': 'Information about the project'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url]);
})

server.listen(port, () => {
    console.log(`Server listen in the port http://localhost:${port}`);
})