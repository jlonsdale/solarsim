const express = require('express');
const jsdom = require("jsdom");
const app = express();
const { JSDOM } = jsdom;

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html')
})