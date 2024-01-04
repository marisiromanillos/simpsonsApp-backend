const express = require("express");
const router = express.Router();
const asyncMySql = require("../mysql/connection");
const {
  addUser,
  checkUsersCreds,
  addToken,
  getTokenByBrowserEmail,
} = require("../mysql/queries");
const sha256 = require("sha256");
const { genRandomString } = require("../utils/math");
const chalk = require("chalk");
const sendEmail = require("../email/send");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //hash the password
  const sha256Password = sha256(password + "simpsimpsonssons");

  // Chalk helps us to see logs in the console
  console.log(chalk.red("BODY:" + JSON.stringify(req.body)));
  console.log(chalk.blue("EMAIL:" + req.body.email));
  console.log(chalk.blue("PASSWORD:" + req.body.password));
  console.log(chalk.white("QUERY:" + checkUsersCreds(email, sha256Password)));

  //compare the hash version to the stored one
  try {
    const results = await asyncMySql(checkUsersCreds(), [
      email,
      sha256Password,
    ]); //prepared statement
    console.log(chalk.grey("RESULTS:" + JSON.stringify(results)));

    if (results.length === 1) {
      //generate tokens
      const token = genRandomString(128);
      const browserTempToken = genRandomString(128);
      const emailTempToken = genRandomString(128);
      //stores token data base
      asyncMySql(
        addToken(results[0].id, token, browserTempToken, emailTempToken, req.ip)
      );
      res.send({ status: 1, browserTempToken });
      //email the email token
      sendEmail(
        "Confirm Login",
        `<a href="http://localhost:6001/account/validate?${emailTempToken}">Click Me</a>`[
          { email }
        ]
      );
    } else {
      res.send({ status: 0, reason: "Bad Creds" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/validate", (req, res) => {
  res.send({ status: 1 });
});

router.post("/loginComplete", async (req, res) => {
  const { browserTempToken, emailTempToken } = req.body;
  try {
    const results = await asyncMySql(getTokenByBrowserEmail);
    if (results.length === 1) {
      res.send({ status: 1, token: results[0].token });
    } else {
      res.send({ status: 0, reason: "One or more temp tokens are wrong" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  //store the user in the database
  try {
    const sha256Password = sha256(password + "simpsimpsonssons");
    const result = await asyncMySql(addUser(email, sha256Password));
    res.send({ status: 1, userId: result.insertId });
    sendEmail(`Welcome New User`, `<p>Enjoy the Simpsons App<p/>`, []);
  } catch (e) {
    console.log(e);
    res.send({ status: 0 });
  }
});

module.exports = router;
