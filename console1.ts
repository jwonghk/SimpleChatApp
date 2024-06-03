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
            console.log("type of p2: " + typeof tooo.p2);
            res.write("Data wrote from Server\n:" + data)
            //res.write(filedata)
            //res.write("I am here!!")
            console.log(typeof tooo.foo);
            console.log(typeof tooo.bar);
            console.log("the third function's type: " + typeof tooo.test1);
            console.log("current module dir:" + __dirname);
            //res.statusCode = 380;
            
            
            //res.write("Send to me from server:" + typeof tooo.foo);
            
            //res.write();
            console.log("the status:" + res.statusCode);
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

const isResolve = false;

const promise1 = new Promise((resolve, rej) => {
    if(isResolve) {
        resolve(3);
        console.log("value of resolve:" + typeof resolve);
        //resolve('promise1 执行态');
    } else {
        //return 4;
        console.log("reject in p1");
        console.log("Type of resolve:" + typeof resolve);
        console.log("Value of resolve:" + resolve);
        rej('promise1 拒绝态');
    }
});


promise1
    .then(value2 => {
        console.log("output from 1st line:" + value2);
        return value2;
    }/*,
        rej => {
            console.log("Inside 1st reject handler:" + rej);
            return rej;
        }*/)
    .then(value3 => {
        console.log("console output:" + value3);
        return value3 + "mom";
    },
        rej => {
            console.log("Inside 2nd reject handler:" + rej);
            return rej;
        })
    
    /*(rej) => {
        console.log("catch it here:" + rej);
        return rej;
        
    })*/
    .then(
        v4 => {
        console.log("value of v4:" + v4);
        return v4 + "3";
    },
        error => {
        console.log("Inside 3rd error here: " + error);
        return error;
    }).
    catch((error) => "output of rejection: " + error);


/*
promise1
    .then(
        value => {
            console.log("value from promise: " + value);
    }
    //,  (res, rej) => {
    //    throw res + "Cause of reject!";
    )
    .then(
        value => {
            console.log(value);
        },
        reason => {
            console.log(reason);
        }
    );
    */



const arry1 = [3,5,9];

arry1.forEach(
    function (i) {
        console.log(i);
    }
);

function asyncForEach(arr, cb) {
    arr.forEach(function () {
        setTimeout(cb, 4000);
    })
};

asyncForEach(arry1, function(i) {
    console.log(i);
})



