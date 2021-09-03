const Course = require("../models/courses/course");
const { multipleMongooseToObject, mongooseToObject  }  = require('../../util/mongoose');
const course = require("../models/courses/course");


class MeController {
 //[GET] me/stored/courses
  storedCourses(req, res, next){
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCourses]) => {
          res.render('me/stored-courses', {
            deletedCourses: deletedCourses,
            courses: multipleMongooseToObject(courses)
          });
      })
      .catch(err => next(err));
  }

 //[GET] me/trash/courses
  trashCourses(req, res, next){
    Course.findDeleted({deleted : true})
    .then(courses => res.render('me/trash-courses', {
      courses: multipleMongooseToObject(courses)
    }))
    .catch(err => next(err));
  }
}

module.exports = new MeController();
