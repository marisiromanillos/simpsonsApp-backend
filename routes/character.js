const express = require("express");
const router = express.Router();
const { genRandomString } = require("../utils/math");
const asyncMySql = require("../mysql/connection");
const {
  deleteCharacter,
  addCharacter,
  getById,
  updateCharacter,
} = require("../mysql/queries");

//DELETE
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  //Check if ID is a Number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const result = await asyncMySql(deleteCharacter(id, req.validatedUserId));

  if (result.affectedRows > 0) {
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, reason: "Delete failed" });
  }
});

//POST
router.post("/", async (req, res) => {
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
    return;
  }

  try {
    await asyncMySql(
      addCharacter(character, quote, characterDirection, req.validatedUserId)
    );

    res.send({ status: 1 });
  } catch (error) {
    console.log(error);
    res.send({ status: 0, reason: "Duplicate Entry" });
  }
});

//UPDATE
// It's a patch because it allows modifications of the data
router.patch("/:id", async (req, res) => {
  //type of direction
  const allowableDirections = ["Left", "Right"];

  // Coerce ID into NUMBER
  const id = Number(req.params.id);

  // Check that it is not a number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const { character, characterDirection, quote, image } = req.body;
  try {
    // For security, we have repetition
    if (character && typeof character === "string") {
      await asyncMySql(
        updateCharacter("name", character, id, req.validatedUserId)
      );
    }
    if (quote && typeof quote === "string") {
      await asyncMySql(
        updateCharacter("quote", quote, id, req.validatedUserId)
      );
    }
    if (allowableDirections.includes(characterDirection)) {
      await asyncMySql(updateCharacter("direction", characterDirection, id));
    }
  } catch (error) {
    res.send({ status: 0, reason: error.sqlMessage });
  }
  res.send({ status: 1 });
});

// GET
router.get("/", async (req, res) => {
  //ask SQL for the data
  const results = await asyncMySql(getById(req.validatedUserdId));

  if (results.length > 0) {
    res.send({ status: 1, results });
    return;
  }

  res.send({ status: 0, reason: "ID not found" });
});

module.exports = router;
