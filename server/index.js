import { Server } from 'socket.io';

const io = new Server(3000, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log('connection received')
    console.log(socket.id)
    socket.emit('hi', 'world')

    socket.on('message', (arg) => {
        console.log(arg)
        socket.emit('response', 'with oreo and cheesecake')
    })
})


socket.on('message', (arg) => {
    io.emit('response', `${socket.id} send: ${arg}`);
});
