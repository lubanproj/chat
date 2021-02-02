import ws from 'nodejs-websocket';
const Port = 3000;

const server = ws.createServer(connect => {
    console.log('connect success...');

    connect.on('text', data => {
        console.log('data :', data);
        connect.sendText(data);
    });

    connect.on('close', () => {
        console.log('connect close...');
    })

    connect.on('error', () => {
        console.log('connect error...');
    })
});

server.listen(Port, ()=> {
    console.log('listening 3000 ...');
});

