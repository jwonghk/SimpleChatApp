const http = require('http')
const fs = require('fs');
const port = 8080
const { replaceStr } = require('./utility.js')
const tooo = require('./tools');


function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;

    // __dirname will resolve to the directory the executing script resides in.
    // So if your script resides in /home/sites/app.js, __dirname will resolve
    // to /home/sites.

    console.log(__dirname + path);

    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain' });
            res.end('500 - Internal Error');
        } 
        else {
            res.writeHead( responseCode, { 'Content-Type' : contentType });
            res.end(data);
        }
    });
}


const server = http.createServer(function (req, res) {
    
  
    //var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    var path = req.url;
    console.log("Current path: " + path);
    switch(path) {
        case '/':
            serveStaticFile(res, '/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/check.png':
            serveStaticFile(res, '/check.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
})




server.listen(port, function (error) {
 
    // Checking any error occur while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening
    else {
        console.log('Server is listening on port' + port);
        server.timeout = 100;
        console.log(server.timeout);
    }
})
