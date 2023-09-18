const express = require("express"); // importing express
const app = express(); //this creates an instance of express
const simpsons = require("./simpsons.json");

// Adds ID to each character
simpsons.forEach((item, index) => {
  item.id = index + 1;
});

//Middleware to make it available to all routes
app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();
});

//convert the body to json
app.use(express.json());

//routes
app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"));

const port = process.env.PORT || 6001; // This is for the hosting company to see where the NODE app will run

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
}); // we need to listen to the port
