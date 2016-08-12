var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());

const insertData = require('./routes/mongodb/insertRoom');
const selectData = require('./routes/mongodb/selectRoom');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/insertRoom',insertData.save);

app.get('/selectRoom',selectData.findAll);

app.listen(8080, () => {
  console.log("==> 🌎  Listening on 8080 ");
});


module.exports = app;
