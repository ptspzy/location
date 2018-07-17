'use strict';

const socket = require('socket.io-client')('http://0739f587.ngrok.io');

socket.on('connect', () => {
  console.log('connect!');
  socket.emit('location', {
    latitude: 39.9219,
    longitude: 116.43355,
    title: '张三',
  });
});

socket.on('res-location', location => {
  console.log('res from server: %s!', JSON.stringify(location));
});
