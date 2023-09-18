const express = require("express");
const router = express.Router();
const { genRandomString } = require("../utils/math");

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
  const indexOf = req.simpsons.findIndex((item) => {
    return item.character === character || item.quote === quote;
  });

  if (indexOf > -1) {
    res.send({ status: 0, reason: "Duplicate Entry" });
  }

  req.simpsons.push({
    id: genRandomString(16), //randomize ID value
    character,
    characterDirection,
    quote,
  });
  res.send({ status: 1 });
});
module.exports = router;
