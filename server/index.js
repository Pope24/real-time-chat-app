const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// router
const userRouter = require("./Routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("Lấy lại năng lượng chiến đấu nào !!");
});

const port = process.env.PORT || 8000;
const uri = process.env.ATLAS_URI;
console.log(uri);
app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established !!");
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error.message);
  });
