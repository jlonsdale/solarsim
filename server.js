const express = require('express');
const jsdom = require("jsdom");
const app = express();
const { JSDOM } = jsdom;

app.use(express.static(__dirname + '/public'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html')
})
