const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//we configure express by calling methods
//not by passing arguments
var app = express(); 

//we can server static files
//http://localhost:3000/images/kitten.jpg
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});