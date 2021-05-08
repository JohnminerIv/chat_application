// app.js
const express = require('express');
const app = express();

// Socket.io has to use the http server
const server = require('http').Server(app);
const exphbs = require('express-handlebars');

//Socket.io
const io = require('socket.io')(server);
let onlineUsers = {};
//Save the channels in this object.
let channels = {"General" : []};

io.on("connection", (socket) => {
  // Make sure to send the channels to our chat file
  require('./sockets/chat.js')(io, socket, onlineUsers, channels);
});

//Establish your public folder
app.use('/public', express.static('public')
)
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({layoutsDir: __dirname + '/views/layouts'}));


app.get('/', (req, res) => {res.render('index.handlebars');});

server.listen('3000', () => {console.log('Listening at:  localhost:3000');});
