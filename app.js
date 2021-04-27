// app.js
const express = require('express');
const app = express();

// Socket.io has to use the http server
const server = require('http').Server(app);
const exphbs = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({layoutsDir: __dirname + '/views/layouts'}));


app.get('/', (req, res) => {res.render('index.handlebars');});

server.listen('3000', () => {console.log('Listening at:  localhost:3000');});
