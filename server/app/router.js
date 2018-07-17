'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);

  // app.io.of('/')
  // app.io.route('chat', app.io.controller.chat.index);
  // app.io.of('/chat')
  // app.io.of('/chat').route('chat', app.io.controller.chat.index);

  app.io.of('/').route('location', app.io.controller.location.index);
  app.io.of('/').route('chat', app.io.controller.chat.index);


  // const nsp = app.io.of('/location');
  // nsp.on('connection', function(socket) {
  //   console.log('someone connected');
  // });
  // nsp.on('disconnect', function(socket) {
  //   console.log('someone disconnection');
  // });
};
