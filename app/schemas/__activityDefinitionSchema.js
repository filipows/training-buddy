var mongoose = require('mongoose');

var ActivityTypeSchema = new mongoose.Schema({
  //_id: {required: true},
  name: {type: String, required: true}

});

module.exports = ActivityTypeSchema;

//category: String,               // {type: String, enum: ['all purpose', 'ogolnorozwojowka'] }
//  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User',  required: false },
//
//repetitions: Boolean,
//  duration: Boolean,
//
//  poolLengths: Boolean,
//  poolSize: Boolean,
//  lengthsUnderwater: Boolean,
//  maxDistanceUnderwater: Boolean,
//
//  pace: Boolean,
//  load: Boolean,
//  comment: {type: Boolean, default: true},
//
//weightSeries: Boolean
