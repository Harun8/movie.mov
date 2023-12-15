const notFound = (req, res) => {
  console.log("Not Found Middleware Triggered for URL:", req.originalUrl);

  return res.status(404).json({ msg: "route does note exsits" });
};

module.exports = notFound;
