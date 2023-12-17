const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const createSecretToken = require("../utils/SecretToken");
const saltRounds = 10; // aka cost factor

const signUp = async (req, res, next) => {
  console.log("REQ,BODY", req.body);
  try {
    const { email, password, username } = req.body;
    const doesUserExists = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (doesUserExists) {
      return res.status(409).json({ msg: "User already exists" }); //409 = conflict
    }

    const newUser = await prisma.users.create({
      data: {
        username: username,
        password: await bcrypt.hash(password, saltRounds), //
        email: email,
      },
      // { username, password, email }
    });
    console.log("password", password);
    const token = createSecretToken(newUser.id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      //  In this case, setting httpOnly to false means that the cookie
      //  can be accessed and potentially manipulated by client-side
      //  JavaScript. This is typically not recommended for sensitive
      //  tokens like authentication tokens, as it could expose
      //  them to cross-site scripting (XSS) attacks.
    });
    return res
      .status(201)
      .json({ message: "User signed in successfully", success: true, newUser });
    next();
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("emai");
    if (!email || !password) {
      return res.status(404).json({ msg: "All fields are required" });
    }

    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "incorrect password or email" });
    }

    const authCheck = await bcrypt.compare(password, user.password);
    if (!authCheck) {
      return res.status(404).json({ msg: "incorrect password or email" });
    }

    const token = createSecretToken(user.id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ msg: "user logged in successfully", success: true });
    return;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, login };
