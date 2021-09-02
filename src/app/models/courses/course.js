const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// var CourseModel = new Schema({
//   author: { type: String, default: 'hahaha' },
//   name: { type: String, default: 'hahaha' },
//   description: { type: String, maxLength: 600, default: 'hahaha' },
//   image: { type: String, maxLength: 600, default: '' },
//   createAt: { type: Date, default: Date.now },
//   UpdateAt: { type: Date, default: Date.now },
// });

var CourseModel = new Schema({
  name: { type: String },
  description: { type: String, maxLength: 600},
  image: { type: String, maxLength: 600},
  slug: { type: String, slug: 'name', unique: true },
  videoId: { type: String, maxLength: 600},
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Todos', CourseModel);