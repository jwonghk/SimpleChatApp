const http = require('http')
const fs = require('fs');
const port = 8080
const { replaceStr } = require('./utility.js')
const tooo = require('./tools');

// Create a server object:
const server = http.createServer(function (req, res) {
    
 
    var isDone  = false;
    //const filedata = fs.readFile('inputfile2.txt');
    //filedata = fs.readFileSync('inputfile1.txt');
    console.log("right after readfile!!");
    res.writeHead(200, {'Content-Type': 'text/html'})
    //res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File not being found!')
        } else {
            res.write(data)
            //res.write(filedata)
            res.write("I am here!!")
            console.log(typeof tooo.foo);
            console.log(typeof tooo.bar);
            res.write(typeof tooo.foo);
            res.write();
        }
        res.end()
    
    })

    
    
    //console.log(filedata.toString());
    //console.log("End of Program execution");


    //res.writeHead(200, {'Content-Type': 'text/html'})


    // Write a response to the client
    res.write('Hello World')
    //res.write(filedata.toString());
 
    // End the response 
    //res.end()
})
 
// Set up our server so it will listen on the port
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
