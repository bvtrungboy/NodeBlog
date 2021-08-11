const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  author: ObjectId,
  name: { type: String, default: 'hahaha' },
  description: { type: String, maxLength: 600, default: 'hahaha' },
  image: { type: String, maxLength: 600, default: '' },
  createAt: { type: Date, default: Date.now },
  UpdateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);