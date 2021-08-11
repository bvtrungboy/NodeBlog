const Course = require("../models/courses/course");

class NewsController {
  //[Get] / news
  index(req, res) {
    console.log(Course);
    Course.find({}, function (err, courses) {
      // docs.forEach
      if(!err) res.json(courses);
      res.status(404).json({err: "Error"});
    });
  //  res.render('news');
  }
}

module.exports = new NewsController();
