/** 
const http = require('http');
var randomWords = require('random-words');
console.log(randomWords());

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(randomWords() + '\n');
});
 
server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
});
*/


const express = require('express');
var cors = require('cors')
const app = express();
const port = 3030;
app.use(express.json());
app.use(cors())

app.get('/sensor1', (req, res) => {
  res.send('Hello World! 1')
});

app.post('/sensorpost1', (req, res) => {
  //nyimpen ke database
  var d = req.body;
  console.log(req.body.suhu)
  res.send("data yg terkirim adalah " + req.body.suhu);
});

app.get('/sensor2', (req, res) => {
  res.send('Hello World! 2')
});

app.post('/sensorpost2', (req, res) => {
  //nyimpen ke database
  var d = req.body;
  console.log(req.body.suhu)
  res.send("data yg terkirim adalah " + req.body.suhu);
});

app.get('/sensor3', (req, res) => {
  res.send({sensor3: 100})
});
 
app.post('/sensorpost3', (req, res) => {
  //nyimpen ke database
  var d = req.body;
  console.log(req.body.suhu)
  res.send("data yg terkirim adalah " + req.body.suhu);
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});

/**
app.get('/mei', (req, res) => {
  res.send('Someone are espacially in my life')
});
*/
