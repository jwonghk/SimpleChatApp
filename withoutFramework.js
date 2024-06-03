import * as fs from "node:fs";
import { readFileSync } from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

import { syncBuiltinESMExports } from 'module';
//import path from "path";
import {fileURLToPath} from 'url';

Object.defineProperty(fs, "readFileSync", {
    writable: true,
    //configurable: true
});


//fs.readFileSync = () => Buffer.from('Hello, ESM');
/*syncBuiltinESMExports();

fs.readFileSync === readFileSync;



const buffer = readFileSync(new URL('./data.proto', import.meta.url));
*/

const PORT = 8000;

const MIME_TYPES = {
    default : "application/octet-stream",
    html: "text/html; charset=UTF-8",
    js: "application/javascript",
    css: "text/css",
    png: "image/png",
    jpg: "image/jpg",
    gif: "image/gif",
    ico: "image/x-icon",
    svg: "imgae/svg+xml",
}

console.log("Process Being:" + process.cwd());
//console.log("what is dirname:" + __dirname);
console.log(import.meta.url);
const buffer = readFileSync(new URL('inputfile1.txt', import.meta.url));
console.log(buffer);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
console.log(__filename)

const k = new URL('file:///C:/path/').pathname
console.log(k);
const m1 = fileURLToPath('file:///C:/path/')
console.log(m1)


const STATIC_PATH = path.join(process.cwd(), "./static");
console.log("stat path is: " + STATIC_PATH)

const url = "http://uefa.com"
const paths = [STATIC_PATH, url];
console.log("paths matrix is: " + paths)
const filePath = path.join('///','a','b','/','d','/','e','/');

console.log("paths matrix of filePath is: " + filePath)

['a/','b'].join('/')