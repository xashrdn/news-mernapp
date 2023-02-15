// IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();
const authRouter = require("./routers/auth");
const newsRouter = require("./routers/news");

// USE
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(newsRouter);

// CONNECT
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
