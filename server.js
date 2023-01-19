const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public'));
});

app.get("/images", (req, res) => {
  res.render("images", { images: imgArr });
});



app.listen(port);
console.log('Server started at http://localhost:' + port);

