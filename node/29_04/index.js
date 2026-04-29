// // // Import the http module
// // const http = require("http");
// // // Create a serverddd
// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader("Content-Type", "text/plain");
// //     res.end("Welcome to the Node.js Tutorial");
// // });

// // // Listen on port 3000
// // server.listen(3000, () => {
// //     console.log(
// //         "Server is running on http://localhost:3000");
// // });

// const fs = require("fs");

// // fs.readFile('meow.txt', 'utf8', (err, data) => {
// //     if (err) {
// //         throw err;
// //     }
// //     console.log(data);
// // });


// //     let x = 0;

// // function loadData(){

// //     x = 100;
// // }



// blocking
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res) => {
//     const data = fs.readFileSync('largeFile.txt', 'utf8'); // Blocking!
//     res.end(data);
// }).listen(3000);

// console.log("Server running at http://localhost:3000/");


// non-blocking
// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('largeFile.txt', 'utf8', (err, data) => { // Non-blocking!
//         if (err) {
//             res.writeHead(500);
//             res.end("Error reading file");
//             return;
//         }
//         res.end(data);
//     });
// }).listen(3000);

// console.log("Server running at http://localhost:3000/");



// // callback

// fs.readFile('inputfile1.txt',
//     function (ferr, filedata) {
//         if (ferr) return console.error(ferr);
//         console.log(filedata.toString());
//     }
// );
// console.log("End of Program execution");

// function task(message) {
//     return Promise.resolve(console.log(message));
// }

// task('Task 1 completed')
//     .then(() => task('Task 2 completed'))
//     .then(() => task('Task 3 completed'));



// Express

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})