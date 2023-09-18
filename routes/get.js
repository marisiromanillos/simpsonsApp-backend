const express = require("express"); //importing express
const router = express.Router(); //just importing router from express

//Gets all the characters
router.get("/characters", (req, res) => {
  res.send({ status: 1, characters: req.simpsons });
});

//Get specific character

router.get("/character/:id", (req, res) => {
  //cohersion to number
  const id = Number(req.params.id);
  //Check if ID is a Number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }
  //copy & find specific character
  const _simpsons = [...req.simpsons];
  const character = _simpsons.find((char) => {
    return char.id === Number(req.params.id);
  });

  //check if the character exists
  if (!character) {
    res.send({ status: 0, reason: "ID not found" });
  }

  res.send({ status: 1, character });
});

module.exports = router;
