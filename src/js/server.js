// console.log("Hi world");
const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

// Чтобы запустить этот сервер, нужно открыть терминал именно на папку с js-файлами 
// и ввести команду node server.js