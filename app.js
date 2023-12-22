const dotenv = require("dotenv").config();
const express = require("express"); // importing express
const app = express(); //this creates an instance of express
const cors = require("cors");
const asyncMySql = require("./mysql/connection");
const checkToken = require("./middleware/auth");
const limiter = require("./middleware/limiter");
const helmet = require("helmet");
const chalk = require("chalk");

app.use(helmet());

//limit login attempts
app.use(limiter);

//bring cors
app.use(cors());

app.use((req, res, next) => {
  console.log(chalk.blue("New Request"));
  next();
});

//convert the body to json
app.use(express.json());

//routes
app.use("/character", checkToken, require("./routes/character"));
app.use("/account", require("./routes/account"));

//port
const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
