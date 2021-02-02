const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', async({ data }) => {
    console.log(data);
});

socket.send('hello world');
