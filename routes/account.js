const express = require("express");
const router = express.Router();
const asyncMySql = require("../mysql/connection");
const { addUser, checkUsersCreds, addToken } = require("../mysql/queries");
const sha256 = require("sha256");
const { genRandomString } = require("../utils/math");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //hash the password
  const sha256Password = sha256(password + "simpsimpsonssons");

  //compare the hash version to the stored one
  try {
    const results = await asyncMySql(checkUsersCreds(email, sha256Password));
    if (results.length > 0) {
      const token = genRandomString(128);
      //stores in token data base
      asyncMySql(addToken(results[0].id, token));

      res.send({ status: 1, token });
    } else {
      res.send({ status: 0, reason: "Bad Creds" });
    }
  } catch (e) {
    console.log(e);
  }

  //tell the user that is "okay"
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  //store the user in the database
  try {
    const sha256Password = sha256(password + "simpsimpsonssons");
    const result = await asyncMySql(addUser(email, sha256Password));
    res.send({ status: 1, userId: result.insertId });
  } catch (e) {
    console.log(e);
    res.send({ status: 0 });
  }
});

module.exports = router;
