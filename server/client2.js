'use strict';

const socket = require('socket.io-client')('http://127.0.0.1:7001');

socket.on('connect', () => {
  console.log('connect!');
  socket.emit('chat', 'clent2 => hello');
});

socket.on('res', msg => {
  console.log('res from server: %s!', msg);
});
