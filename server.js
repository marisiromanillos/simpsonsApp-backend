const express = require("express"); // importing express
const app = express(); //this creates an instance of express
const simpsons = require("./simpsons.json");
const logging = require("./middleware/logging");
const auth = require("./middleware/auth");

simpsons.forEach((char, index) => (char.id = index + 1));

// handle static file middleware
app.use(express.static("public"));

app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();
});

//convert the body to json middleware
app.use(express.json());

//logging middleware
app.use(logging);

// //API key validation middleware
app.use(auth);

//route middleware
app.use("/quotes", require("./routes/quotes"));
app.use("/", require("./routes/demo"));

const port = process.env.PORT || 6001; // This is for the hosting company to see where the NODE app will run

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
}); // we need to listen to the port
