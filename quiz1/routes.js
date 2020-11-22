

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/form') {
    res.write('<html>')
    res.write('<head><title>My first page from Node </title></head>');
    res.write('<body><form action="create-user" method="POST"><input type="text" name="username"><button type="">Submit</button></form></body>')
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      //console.log(chunk)// chunk of hex bytes eg for str 1 byte = 2 hex characters => 1 ASCII char  
      body.push(chunk)//array of buffer objects
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      //console.log(parsedBody);// just like inputName(ie key) = inputString.split(' ').join('+') (ie from value)
      const msg = parsedBody.split('=')[1].split('+').join(" ");
      console.log(msg)
      res.statusCode = 302; //set the statusCode to redirecting code
      res.setHeader('Location', '/'); //direction given for the redirect
      return res.end();
    })
  }

  if (url === '/users') {
    res.write('<html>')
    res.write('<head><title>My first page from Node </title></head>');
    res.write(`
    <body>
    <ul>
    <li>MaxFord</li>
    <li>Max</li>
    <li>Hart</li>
    </ul>
    </body>`)
    res.write('</html>');
    return res.end();
  }



  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>User Form</title></head>')
  res.write('<body><h1>Hello from Node Server</h1><a href="/form">User form</a></body>')
  res.write('</html>');
  res.end();



}

exports.handler = reqHandler;