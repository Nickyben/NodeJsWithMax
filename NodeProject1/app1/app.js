const http = require('http');
const routes =  require('./routes')//relative path to this project

const server1 = http.createServer(routes);
server1.listen(3000)