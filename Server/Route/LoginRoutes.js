const express = require ("express")
const router = express.Router()

const loginCheck = require("../Controller/LoginController")

router.post("/loginuser",loginCheck.login)
router.get("/loginverify",loginCheck.verify)

module.exports=router;