
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5000;
const server = http.createServer(app)


// pass a listener to the server 
server.listen(port, err => console.log(`listening http://localhost:${port}`));
// server.listen(port, err => console.log(`listening http://localhost:${port}`));

