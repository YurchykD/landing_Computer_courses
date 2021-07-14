const http = require('http');
const express = require('express');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port);

console.log(`Server running at http://${hostname}:${port}`);