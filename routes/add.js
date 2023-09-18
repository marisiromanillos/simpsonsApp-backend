const express = require("express");
const router = express.Router();

//add new character
router.post("/character", (req, res) => {
  const { character, characterDirection, quote } = req.body;
  if (
    !character ||
    !characterDirection ||
    !quote ||
    typeof character !== "string" ||
    typeof characterDirection !== "string" ||
    typeof quote !== "string"
  ) {
    res.send({ status: 0, reason: "Invalid or incomplete request" });
  }

  //check for duplicates

  const indexOf = req.simpsons.push({
    id: Math.round(Math.random() * 100000),
    character,
    characterDirection,
    quote,
  });
  res.send({ status: 1 });
});
module.exports = router;
