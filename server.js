
/*const express = require('express');

const app = express();

app.use(express.static('./dist/ff13'));

app.get('/!*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/ff13/'}));

app.listen(process.env.PORT || 8080);*/


const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ff13'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/ff13/index.html'));});
app.listen(process.env.PORT || 8080);
