const express = require("express"); //importing express
const router = express.Router(); //just importing router from express

router.post("/", (req, res) => {
  console.log("demo.js post route body:", req.body);
});

module.exports = router;
