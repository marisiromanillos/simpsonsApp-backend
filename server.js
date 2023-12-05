const express = require("express"); // importing express
const app = express(); //this creates an instance of express
const cors = require("cors");
const asyncMySql = require("./mysql/connection");
const checkToken = require("./middleware/auth");

//bring cors
app.use(cors());

app.use((req, res, next) => {
  console.log("New Request");
  next();
});

//convert the body to json
app.use(express.json());

//routes
app.use("/character", checkToken, require("./routes/character"));
app.use("/account", require("./routes/account"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
