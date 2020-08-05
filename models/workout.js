const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: {
        type: String,
      },
    name: {
        type: String,
      },
    weight: {
        type: Number,
      },
    reps: {
        type: Number,
      },
    sets: {
        type: Number,
      },
    duration: {
        type: Number
      }
    }
  ],
  totalDuration: Number
});

workoutSchema.methods.calcDuration = function() {
  this.totalDuration = 100;
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;