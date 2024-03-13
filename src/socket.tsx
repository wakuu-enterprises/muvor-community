import io from 'socket.io-client';

// const socket = io('ws://192.168.1.254:9000');
// const socket = io(`wss://muvor.xyz`);
const socket = io(`https://api.muvor.com`, {
    path: "/bridge/"
  });

export default socket;
