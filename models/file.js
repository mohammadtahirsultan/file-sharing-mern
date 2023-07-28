import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
  downloadContent: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const file = mongoose.model("file", fileSchema);

export default file;
