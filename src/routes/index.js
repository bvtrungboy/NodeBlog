const newRouter = require('./news');
const sourceRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  //app.use('/news', newRouter);

  app.use('/', newRouter);
  app.use('/courses', sourceRouter);
  app.use('/me', meRouter);
}

module.exports = route;
