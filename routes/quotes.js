const express = require("express"); //importing express
const router = express.Router(); //just importing router from express

//route
router.get("/", (req, res) => {
  console.log("quotes route");
  const { character, num } = req.query; //desctructuring

  let _simpsons = [...req.simpsons]; // this means passing simpson from server.js

  //if specific character is asked for
  if (character) {
    _simpsons = _simpsons.filter((char) => {
      return char.character
        .toLocaleLowerCase()
        .includes(character.toLowerCase());
    });
  }
  //if specific quantity is asked for
  if (num && Number(num) > 0 && _simpsons.length > num) {
    _simpsons.length = num;
  }
  res.send(_simpsons);
});

module.exports = router;
