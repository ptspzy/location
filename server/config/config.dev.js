'use strict';

module.exports = appInfo => {
  return {
    keys: appInfo.name + '_1530755257790_3720',
    middleware: [],
    io: {
      init: {}, // passed to engine.io
      namespace: {
        '/': {
          connectionMiddleware: [],
          packetMiddleware: [],
        },
        '/example': {
          connectionMiddleware: [],
          packetMiddleware: [],
        },
      },
    },
  };
};
