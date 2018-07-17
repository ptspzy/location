'use strict';

module.exports = app => {
  class User extends app.Service {
    async say(test) {
      return test;
    }
  }
  return User;
};
