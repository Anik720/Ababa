const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
  movieName: {
    type: String,
  },
  movieReleaseDate: {
    type: Date,
  },
  imdbRating: {
    type: Number,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});


shareSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
  });

  next();
});
const Share = mongoose.model("Share", shareSchema);

module.exports = Share;
