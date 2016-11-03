// Similar to import http from 'http'
// but node doesn't have ES2015 modules
const http = require('http');

// Set a variable for our HTTP port
const PORT = 3333;
// Set visitors to 1 when the server starts
let visitors = 1;

// This function is run when ANY HTTP traffic hit our server
function onVisit(request, response) {
  // This only logs on the server not in the browser console
  console.log('This only shows up in the terminal');

  // Set the header so the browser knows this is HTML
  response.setHeader('Content-Type', 'text/html');

  // Send text as the body of our response
  response.end(`
    <h2>Hey There Visitor!!!</h2>
    <p>You asked for the url "${request.url}"</p>
    <p>Visitors: ${visitors}</p>
    <script>console.log('just some Javscript');</script>
    `);

  // Check if the incoming URL is not the favicon
  if (request.url !== '/favicon.ico') {
    // Increment the visitors variable
    visitors ++;
  }
}

// Makes a server that calls "onVisit" when HTTP traffic comes in
const server = http.createServer(onVisit);

// Tell the server to start listening on PORT (3333)
server.listen(PORT);
