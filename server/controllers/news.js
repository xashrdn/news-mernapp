const News = require("../models/news");

exports.createNews = async (req, res) => {
  try {
    const { publisher, title, texts, imgUrl, tag, date, userId } = req.body;
    const newNews = await new News({
      publisher,
      title,
      texts,
      imgUrl,
      tag,
      date,
      userId,
    }).save();
    res.status(201).json({ newNews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.readAllNews = async (req, res) => {
  try {
    const result = await News.find();
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.readNews = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await News.findById({ id: id });
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateNews = async (req, res) => {
  //   try {
  //     const { userId } = req.params;
  //     const result = await UserSchema.findById({ userId: userId });
  //     const { title, date, tag, imgUrl, texts } = req.body;
  //     await News.findByIdAndUpdate(result, {
  //       title,
  //       date,
  //       tag,
  //       imgUrl,
  //       texts,
  //     });
  //   } catch (err) {
  //     res.status(500).send(err.message);
  //   }
};

exports.deleteNews = async (req, res) => {
  try {
    const { userId } = req.params;
    await News.findByIdAndDelete({ userId: userId });
    res.status(200).send(`Successfully deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteAllNews = async (req, res) => {
  try {
    const { userId } = req.params;
    await News.deleteMany({ userId: userId });
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
