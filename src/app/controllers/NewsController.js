const Course = require("../models/courses/course");
const { multipleMongooseToObject }  = require('../../util/mongoose');


class NewsController {
  //[Get] / news
   index(req, res, next) {
    Course.find({})
    .then(courses => res.render('home', {
      courses: multipleMongooseToObject(courses)
    }))
    .catch(err => next(err));
  //  res.render('news');
  }
}

module.exports = new NewsController();
