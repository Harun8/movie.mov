const { signUp, login } = require("../controllers/AuthController");
const { userVerification } = require("../middleware/auth");
const router = require("express").Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/").post(userVerification);

module.exports = router;
