const express = require("express");
const router = express.Router();
const cont = require("../Controller/AdminLoginController");
router.post("/adminlogin",cont.Login);
router.get("/adminloginget",cont.getLogin);

module.exports = router;
