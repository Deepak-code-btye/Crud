import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./routes/route.js";
const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", route);
const DB =
  "mongodb+srv://deep:deep123456789@cluster0.taxhe.mongodb.net/crud1?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => {
    console.log(`no connection`, error);
  });

app.listen(PORT, () => {
  console.log(`successful connection ${PORT}`);
});
