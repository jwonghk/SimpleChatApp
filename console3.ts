const http = require('http')
const fs = require('fs');
const port = 8080
const { replaceStr } = require('./utility.js')
const tooo = require('./tools');

let count = 0;
function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;

    // __dirname will resolve to the directory the executing script resides in.
    // So if your script resides in /home/sites/app.js, __dirname will resolve
    // to /home/sites.
    count = count + 1;
    console.log("count here, " + count + ":" + __dirname + path);
    var fsTextfile = fs.createReadStream(__dirname + path);
    if(contentType == 'text/html') {
        
        fsTextfile.on('open', function() {
            console.log("html file here");
            res.setHeader('Content-Type', contentType);
            fsTextfile.pipe(res);
            console.log("html file after piped!");
        })
    }

    // change image/png to image/jpg
    else if(contentType == 'image/jpg' || contentType == 'text/css' || contentType =='image/png') {
        console.log("here is the contentType Var: " + contentType);
        
        fsTextfile.on('open', function() {
            console.log("Before fileStream Piped!!!!!");
            res.setHeader('Content-Type', contentType);
            fsTextfile.pipe(res);
            console.log("fileStream Piped!!!!!");
        });
        console.log("Has gone inside image_jpeg, image_png, text type");
    }

    /*
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            console.log("the file name: " + __dirname + path);
            //res.writeHead(500, { 'Content-Type' : 'text/plain' });
            res.end('500 - Internal Error');
        } 
        else {
            console.log("success here: " + __dirname + path);
            res.writeHead( responseCode, { 'Content-Type' : contentType });
            res.end(data);
        }
    });
    */
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
        case '/myFavoriteicon.png':
            serveStaticFile(res, '/myFavoriteicon.jpg', 'image/jpg');
            break;
        case '/myCustomStyle.css':
            serveStaticFile(res, '/myCustomStyle.css', 'text/css');
            break;
        
        /*
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
        */
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
