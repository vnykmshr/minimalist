'use strict';

module.exports = function (app) {
  app.locals = {
    environment: app.settings.env,
    title: 'Hello World!',
    pretty: (app.settings.env !== 'production'),
  };

  app.set('view engine', 'jade');
};
