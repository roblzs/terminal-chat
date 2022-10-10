import * as dotenv from 'dotenv';
import { Server } from 'socket.io';

dotenv.config();

const server = new Server(Number(process.env.PORT), {});

console.log('server running on port ' + process.env.PORT);

server.on('connection', (socket) => {
    console.log('a user connected.');

    socket.on('sendMessage', (payload) => {
        console.log('new message:', payload);

        socket.emit('receiveMessage', payload);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected!');
    });
});
