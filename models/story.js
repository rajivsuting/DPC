const mongoose = require("mongoose");

const Story = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
});

module.exports = mongoose.model("Story", Story);
