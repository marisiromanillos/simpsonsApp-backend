const { getIdByToken } = require("../mysql/queries");
const asyncMySql = require("../mysql/connection");

const checkToken = async (req, res, next) => {
  const results = await asyncMySql(getIdByToken(req.headers.token));

  if (results.length === 1) {
    //attach token id to the request
    req.validatedUserId = results[0].user_id;
    next();
    return;
  }
  res.send({ status: 0, reason: "Bad Token" });
};

module.exports = checkToken;
