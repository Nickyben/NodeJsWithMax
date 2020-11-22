const http = require('http');
const myRoutes =  require('./routes');

const myServer = http.createServer(myRoutes.handler)
myServer.listen(3000);