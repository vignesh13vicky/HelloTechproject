const express = require("express")
const router = express.Router();
const cont = require("../Controller/RegistrationController")

router.post("/userAdd",cont.newRegistration)

router.get("/userRead",cont.getUser)

router.post("/userDel/:id",cont.userDel)

module.exports=router;