const fs = require('fs');

const requestHandler = (req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>My first page from Node </title></head>');
    res.write('<body><form action="message" method="POST"><input type="text" name="myInputMessage"><button type="">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk)// chunk of hex bytes eg for str 1 byte = 2 hex characters => 1 ASCII char  
      body.push(chunk)//array of buffer objects
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      //console.log(parsedBody);// just like inputName(ie key) = inputString.split(' ').join('+') (ie from value)
      const msg = parsedBody.split('=')[1].split('+').join(" ");
      fs.writeFile('message.text', msg, (err) => {
        // res.writeHead(302, {...}) or
        res.statusCode = 302; //set the statusCode to redirecting code
        res.setHeader('Location', '/'); //direction given for the redirect
        return res.end();
      }); // create a file and insert the text



    })


  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>My first page from Node </title></head>')
  res.write('<body><h1>Hello from Node Server</h1></body>')
  res.write('</html>');
  res.end();


  // process.exit(); //comment since server needs to keep running 

}


module.exports = requestHandler;

//OR module.exports.handler = requestHandler; as a obj key
//OR module.exports={handler: requestHandler}; as an obj
//OR exports.handler = requestHandler; //shortcut