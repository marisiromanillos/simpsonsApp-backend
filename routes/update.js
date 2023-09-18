const express = require("express");
const router = express.Router();

// It's a patch because it allows modifications of the data
router.patch("/character/:id", (req, res) => {
  //type of direction
  const allowableDirections = ["Left", "Right"];

  // Coerce ID into NUMBER
  const id = Number(req.params.id);
  // Check that it is not a number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const { character, characterDirection, quote } = req.body;

  const indexOf = req.simpsons.findIndex((item) => {
    return item.id === id;
  });

  // Check if user exists
  if (indexOf === -1) {
    res.send({ status: 0, reason: "ID not found" });
    return;
  }

  // For security, we have repetition
  if (character && typeof character === "string") {
    req.simpsons[indexOf].character = character;
  }
  if (quote && typeof quote === "string") {
    req.simpsons[indexOf].quote = quote;
  }
  if (
    characterDirection &&
    typeof characterDirection === "string" &&
    allowableDirections.includes(characterDirection)
  ) {
    req.simpsons[indexOf].characterDirection = characterDirection;
  }

  res.send({ status: 1 });
});

module.exports = router;
