const io = require( "socket.io" )();
const socketapi = {
    io: io
};

io.on("connection", function (socket) {


    socket.on("message", function (message) {

        console.log("Message Received: " + message);

        socket.broadcast.emit('message', message)

    })


    socket.on("disconnect", function () {
        console.log("A user disconnected");
    });

});

module.exports = socketapi;