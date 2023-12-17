const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userVerification = async (req, res) => {
  const token = req.cookies.token;
  console.log("TOKEN ", token);
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await prisma.users.findUnique({
      where: {
        id: data.id,
      },
    });

    console.log("Auth Middleware Triggered for URL:", req.originalUrl);
    if (user) {
      return res.json({ status: true, user: user.username });
    } else {
      return res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};

module.exports = { userVerification };
