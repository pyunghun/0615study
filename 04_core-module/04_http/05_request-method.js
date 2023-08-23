const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('./index.html', (err, data) => {
        // 요청 경로
        // console.log(request.url);
        // console.log(request.method);

        if(request.method === 'GET' && request.url === '/') {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }

        if(request.method === 'GET' && request.url === '/menu') {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
            response.write('<h1>Menu목록 응답</h1>');
        }
    });
}).listen(8888, () => console.log('server start'));

