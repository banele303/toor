const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      _id: String,
      required: [true, "Please provide value"],
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
