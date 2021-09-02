const newRouter = require('./news');
const sourceRouter = require('./courses');

function route(app) {
  //app.use('/news', newRouter);

  app.use('/', newRouter);
  app.use('/courses', sourceRouter);
}

module.exports = route;
