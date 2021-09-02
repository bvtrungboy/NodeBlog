const Course = require("../models/courses/course");
const { multipleMongooseToObject, mongooseToObject  }  = require('../../util/mongoose');
const course = require("../models/courses/course");


class MeController {
 //[GET] me/stored/courses
  storedCourses(req, res, next){
    Course.find({})
    .then(courses => res.render('me/stored-courses', {
      courses: multipleMongooseToObject(courses)
    }))
    .catch(err => next(err));
  }
}

module.exports = new MeController();
