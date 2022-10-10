import { io } from 'socket.io-client';
import { input } from './utils/input';

const socket = io('http://localhost:6000');

let username = '';

const writeMessage = async () => {
    const message = await input('Enter message: ');

    console.log(message)

    socket.emit('sendMessage', { username, message });
};

socket.on('receiveMessage', (message) => {
    console.log(`${message.username}: ${message.message}`);

    writeMessage();
});

const main = async () => {
    username = await input('Enter username: ');

    writeMessage();
};

main();
