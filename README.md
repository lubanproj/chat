# chat
a chat implemented by nodejs and websocket

## run server
```
node server.js
```

## run client in browser (e.g. Google Chrome console)

```
const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', async({ data }) => {
    console.log(data);
});

socket.send('hello world');
```
