var mongoose = require('mongoose');

var weightSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  weight: {type: Number, required: true}      // [kg]
});

module.exports = weightSchema;