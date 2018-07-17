'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const locationInfo = this.ctx.args[0];
      console.log('location :', JSON.stringify(locationInfo) + ' : ' + process.pid);
      this.ctx.socket.broadcast.emit('res-location', locationInfo);

      // const say = await this.ctx.service.user.say('res-location:' + message);
      // this.ctx.socket.broadcast.emit('res-location', say);
    }
  }
  return Controller;
};
