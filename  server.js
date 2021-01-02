
const express = require('express');

const app = express();

app.use(express.static('./dist/ff13'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/ff13/'}));

app.listen(process.env.PORT || 8080);
