var mongoose = require('mongoose');

var activityCategorySchema = new mongoose.Schema({
  name: {type: String, required: true}
});

module.exports = activityCategorySchema;