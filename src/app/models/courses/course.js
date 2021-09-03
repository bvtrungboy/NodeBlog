const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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

mongoose.plugin(slug);
CourseModel.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt : true });

module.exports = mongoose.model('Todos', CourseModel);