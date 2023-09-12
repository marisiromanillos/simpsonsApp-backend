const logging = (req, res, next) => {
  console.log(new Date(), req.path); //do some work
  next();
};

module.exports = logging;
