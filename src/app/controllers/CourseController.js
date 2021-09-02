const Course = require("../models/courses/course");
const { multipleMongooseToObject, mongooseToObject  }  = require('../../util/mongoose');
const course = require("../models/courses/course");


class CourseController {
  //[GET] course/show
  show(req, res, next) {
    Course.findOne({slug : req.params.slug})
        .then((course) => {
            res.render('courses/show', {
                course: mongooseToObject(course)
            });
        })
        .catch(next);
    //res.send("Course Detail + " +  req.params.slug);
  }

  //[GET] course/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] course/store
  store(req, res, next) {
    const course = new Course(req.body);
    course.save()
      .then(() =>  res.redirect('/'))
      .catch();
  }
  //[GET] course/id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
    .then((course) => {
        res.render('courses/edit', {
            course: mongooseToObject(course)
        });
    })
    .catch(next);
  }
  //[PUT] course/:id
  update(req, res, next) {
    Course.updateOne({_id : req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
}

module.exports = new CourseController();
