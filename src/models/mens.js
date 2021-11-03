const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    required: true,
    unique: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});
const MenRanking = new mongoose.model("MenRanking", menSchema);
module.exports = MenRanking;
