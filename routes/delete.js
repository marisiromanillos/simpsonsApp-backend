const express = require("express"); //importing express
const router = express.Router(); //just importing router from express

//
router.delete("/character/:id", (req, res) => {
  const id = Number(req.params.id);

  //Check if ID is a Number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const indexOf = req.simpsons.findIndex((item) => {
    return item.id === id;
  });

  // To find out if there are no characters
  if (indexOf < 0) {
    res.send({ status: 0, reason: "ID not found" });
  }

  req.simpsons.splice(indexOf, 1);
  res.send({ status: 1 });
});

module.exports = router;
