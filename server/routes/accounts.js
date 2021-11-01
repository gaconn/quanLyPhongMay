const express = require("express");
const router = express.Router();
//controllers
const userController = require("../controllers/userController");
router.post("/api/login", userController.login);
router.post("/api/register", userController.register);

module.exports = router;
