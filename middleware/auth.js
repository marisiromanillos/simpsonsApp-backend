const apiKey = "abcd1234";

const auth = (req, res, next) => {
  if (req.headers.api_key === apiKey) {
    next();
  }
  res.send("Sorry, bad API key");
};

module.exports = auth;
