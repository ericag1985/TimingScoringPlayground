var mongoose = require('mongoose');
//mongoose.set('debug', true);

var racerSchema = new mongoose.Schema({
  racer_name: {
    type: String
  },
  racer_class: {
    type: String
  },
  racer_points: {
    type: Number,
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  sponsor: {
    type: String
  },
  car_make: {
    type: String
  },
  car_model: {
    type: String
  },
  car_year: {
    type: Number
  },
  car_color: {
    type: String
  },
  car_number: {
    type: Number
  },
  track_name: {
    type: String
  },
  best_lap_pos: {
    type: Number
  },
  best_lap_pic: {
    type: String
  },
  best_lap_date: {
    type: String
  },
  total_laps: {
    type: Number
  },
  time_gap: {
    type: Number
  },
  time_dif: {
    type: Number
  }
});

module.exports = racerSchema;