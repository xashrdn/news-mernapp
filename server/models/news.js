const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlenth: 50,
    },
    publisher: {
      type: String,
      minlength: 2,
      maxlenth: 50,
    },
    date: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    tag: {
      type: String,
      required: true,
      minlength: 5,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
        minlength: 100,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);
module.exports = News;
