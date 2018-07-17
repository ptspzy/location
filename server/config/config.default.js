'use strict';

module.exports = appInfo => {
  return {
    keys: appInfo.name + '_1530755257790_3720',
    middleware: [],
    io: {
      init: {}, // passed to engine.io
      namespace: {
        '/': {
          connectionMiddleware: [ ],
          packetMiddleware: [ ],
        },
        '/chat': {
          connectionMiddleware: [ ],
          packetMiddleware: [],
        },
      },
    },
    mongoose: {
      url: 'mongodb://localhost:27017/location',
      options: {
        server: {
          useMongoClient: true,
          autoReconnect: true,
          poolSize: 10,
          keepAlive: 1,
          connectTimeoutMS: 30000,
          reconnectTries: Number.MAX_VALUE,
          reconnectInterval: 2000,
        },
      },
    },
  };
};
