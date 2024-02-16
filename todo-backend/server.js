const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDB = require("./database/db");
const userRouter = require("./routes/userRoute");
const todoRouter = require("./routes/todoRoute");

dotenv.config({ path: path.join(__dirname, "config/config.env") });
app.use(cors());
// app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/v1", userRouter);
app.use("/api/v1", todoRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on PORT ${process.env.PORT}`);
});
