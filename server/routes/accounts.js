const express = require("express");
const router = express.Router();
const verifyUser = require("../middlewares/auth");
//controllers
const userController = require("../controllers/userController");
router.post("/api/login", userController.login);
router.post("/api/register", userController.register);
router.post("/", verifyUser, userController.checkUser);

module.exports = router;
