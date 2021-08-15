const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// var CourseModel = new Schema({
//   author: { type: String, default: 'hahaha' },
//   name: { type: String, default: 'hahaha' },
//   description: { type: String, maxLength: 600, default: 'hahaha' },
//   image: { type: String, maxLength: 600, default: '' },
//   createAt: { type: Date, default: Date.now },
//   UpdateAt: { type: Date, default: Date.now },
// });

var CourseModel = new Schema({
  author: { type: String },
  name: { type: String },
  description: { type: String, maxLength: 600},
  image: { type: String, maxLength: 600},
  createAt: { type: Date},
  UpdateAt: { type: Date },
});

module.exports = mongoose.model('Todos', CourseModel);