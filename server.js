const http = require('http');
const staticServer = require('node-static');
const port = 3000;

console.log(`Server are running on port ${port}`);

const server = new staticServer.Server(`${__dirname}/`, {
  headers: {
    // eslint-disable-next-line quotes
    "Access-Control-Allow-Origin": "*",
    // eslint-disable-next-line quotes
    "Access-Control-Allow-Methods": "*",
    // eslint-disable-next-line quotes
    "Access-Control-Allow-Headers": "*"
  }
});

http.createServer((req, res) => {
  server.serve(req, res);
}).listen(port);
