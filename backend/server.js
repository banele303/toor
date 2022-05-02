const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
require("dotenv").config();
const app = express();
const Port = process.env.PORT;
const colors = require("colors");
const  connectDB  = require("./config/db");



connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(errorHandler);
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(Port, () => {
  console.log(`Express running on port${Port}`);
});
