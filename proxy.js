const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server to handle requests
const server = http.createServer((req, res) => {
  // The target URL for the proxy
  const target = 'http://example.com'; // Replace with the URL you want to proxy to

  // Log the incoming request
  console.log(`Proxying request for: ${req.url}`);

  // Proxy the request to the target
  proxy.web(req, res, { target }, (error) => {
    console.error('Error proxying request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Proxy error');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
