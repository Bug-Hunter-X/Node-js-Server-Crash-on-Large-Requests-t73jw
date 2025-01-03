const http = require('http');

const server = http.createServer((req, res) => {
  //Solution: Handle large request using streams
  let body = '';
  req.on('data', chunk => {
    //Check chunk size before processing
    if(chunk.length > 1e6) { //Prevent too much memory consumption
      res.writeHead(413, {'Content-Type': 'text/plain'});
      res.end('Request too large');
      return req.destroy(); //Abort the request
    }
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});