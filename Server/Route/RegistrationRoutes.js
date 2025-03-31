const express = require("express")
const router = express.Router();
const cont = require("../Controller/RegistrationController")
const contt = require("../Controller/LoginController")

router.post("/userAdd",contt.verify,cont.enquirySubmit)

router.get("/userRead",cont.getUser)

router.post("/userDel/:id",cont.userDel)

module.exports=router;