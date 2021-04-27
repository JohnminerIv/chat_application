// app.js
const express = require('express');
const app = express();

// Socket.io has to use the http server
const server = require('http').Server(app);
const exphbs = require('express-handlebars');

//Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
  console.log("🔌 New user connected! 🔌");
})

//Establish your public folder
app.use('/public', express.static('public')
)
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({layoutsDir: __dirname + '/views/layouts'}));


app.get('/', (req, res) => {res.render('index.handlebars');});

server.listen('3000', () => {console.log('Listening at:  localhost:3000');});
