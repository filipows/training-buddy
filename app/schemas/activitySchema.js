var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
  name: {type: String, required: true},

  repetitions: [Number],          // [15, 15,15]
  duration: [Number],             // [30, 30, 30] [s]

  poolLengths: Number,            // 50 dlugosci
  poolSize: Number,               // 25 [m]
  lengthsUnderwater: Number,      // 3 dlugosci
  maxDistanceUnderwater: Number,  // 30m

  pace: Number,                   // 5min/km = 300s/km
  load: Number,                   // Obciazenie [kg]
  comment: String,                // bieg o puchar rektora / gra z Igorem

  weightSeries: [{
    weight: Number,               //  20[kg]
    repetitions: Number
  }]
});

module.exports = activitySchema;